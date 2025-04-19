package com.elite.qel_medistore;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.view.View;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.DownloadListener;
import android.webkit.PermissionRequest;
import android.webkit.URLUtil;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.content.FileProvider;

import java.io.File;

public class MainActivity extends Activity {

    private WebView webView;
    private static final int FILE_CHOOSER_REQUEST = 100;
    private static final int PERMISSION_REQUEST_CODE = 1;
    private ValueCallback<Uri[]> uploadMessage;
    private Uri photoURI;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        enableFullScreenMode();

        webView = findViewById(R.id.webview);
        webView.setVisibility(View.INVISIBLE); // hide WebView initially

        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccess(true);
        webSettings.setAllowContentAccess(true);
        webSettings.setMediaPlaybackRequiresUserGesture(false);
        webSettings.setBuiltInZoomControls(true);
        webSettings.setSupportZoom(false);
        webSettings.setUseWideViewPort(true);
        webSettings.setLoadWithOverviewMode(true);

        CookieManager.getInstance().setAcceptCookie(true);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();

                if (url.startsWith("mailto:") || url.startsWith("sms:") || url.startsWith("tel:")) {
                    startExternalIntent(new Intent(Intent.ACTION_VIEW, Uri.parse(url)), "No suitable app found!");
                    return true;
                }

                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                if (intent.resolveActivity(getPackageManager()) != null) {
                    startActivity(intent);
                } else {
                    view.loadUrl(url);
                }
                return true;
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                // Show WebView after it's fully loaded
                webView.setVisibility(View.VISIBLE);
                super.onPageFinished(view, url);
            }
        });

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(PermissionRequest request) {
                MainActivity.this.runOnUiThread(() -> {
                    if (hasPermissions(request.getResources())) {
                        request.grant(request.getResources());
                    } else {
                        ActivityCompat.requestPermissions(MainActivity.this, request.getResources(), PERMISSION_REQUEST_CODE);
                    }
                });
            }

            @Override
            public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
                if (uploadMessage != null) {
                    uploadMessage.onReceiveValue(null);
                    uploadMessage = null;
                }

                uploadMessage = filePathCallback;

                if (!hasPermission(Manifest.permission.CAMERA)) {
                    requestPermission(Manifest.permission.CAMERA);
                    return false;
                }

                Intent captureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                File photoFile = new File(getExternalFilesDir(Environment.DIRECTORY_PICTURES), "photo.jpg");
                photoURI = FileProvider.getUriForFile(MainActivity.this, getApplicationContext().getPackageName() + ".provider", photoFile);
                captureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoURI);

                Intent selectIntent = new Intent(Intent.ACTION_GET_CONTENT);
                selectIntent.addCategory(Intent.CATEGORY_OPENABLE);
                selectIntent.setType("*/*");

                Intent chooserIntent = Intent.createChooser(selectIntent, "Select File");
                chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Intent[]{captureIntent});

                startActivityForResult(chooserIntent, FILE_CHOOSER_REQUEST);
                return true;
            }
        });

        webView.setDownloadListener((url, userAgent, contentDisposition, mimeType, contentLength) -> {
            if (!hasPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE)) {
                requestPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);
            } else {
                downloadFile(url, mimeType);
            }
        });

        webView.loadUrl("file:///android_asset/index.html");
    }

    private void enableFullScreenMode() {
        getWindow().getDecorView().setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
            View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
            View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);

        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS,
            WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);

        getWindow().setStatusBarColor(android.graphics.Color.TRANSPARENT);
    }

    private void requestPermission(String permission) {
        ActivityCompat.requestPermissions(this, new String[]{permission}, PERMISSION_REQUEST_CODE);
    }

    private boolean hasPermission(String permission) {
        return ContextCompat.checkSelfPermission(this, permission) == PackageManager.PERMISSION_GRANTED;
    }

    private boolean hasPermissions(String[] permissions) {
        for (String permission : permissions) {
            if (!hasPermission(permission)) {
                return false;
            }
        }
        return true;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        for (int i = 0; i < permissions.length; i++) {
            if (grantResults[i] == PackageManager.PERMISSION_GRANTED) {
                Toast.makeText(this, permissions[i] + " granted!", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(this, permissions[i] + " denied!", Toast.LENGTH_SHORT).show();
            }
        }
    }

    private void downloadFile(String url, String mimeType) {
        String fileName = URLUtil.guessFileName(url, null, mimeType);
        File downloadDirectory = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
        File file = new File(downloadDirectory, fileName);

        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(Uri.parse(url));
        startActivity(intent);

        Toast.makeText(this, "Downloading: " + fileName, Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == FILE_CHOOSER_REQUEST) {
            if (uploadMessage == null) return;

            Uri[] results = null;
            if (resultCode == RESULT_OK) {
                results = data == null ? new Uri[]{photoURI} : new Uri[]{data.getData()};
            }
            uploadMessage.onReceiveValue(results);
            uploadMessage = null;
        }
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    private void startExternalIntent(Intent intent, String errorMessage) {
        if (intent.resolveActivity(getPackageManager()) != null) {
            startActivity(intent);
        } else {
            Toast.makeText(MainActivity.this, errorMessage, Toast.LENGTH_SHORT).show();
        }
    }
}
