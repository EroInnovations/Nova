package com.elite.testing;

import android.os.Bundle;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import androidx.appcompat.app.AppCompatActivity;
import android.net.Uri;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private WebAppInterface webAppInterface;
    private FileChooserHelper fileChooserHelper;
    
    private ValueCallback<Uri[]> uploadMessage;
    private static final int FILE_CHOOSER_REQUEST = 102;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webView);

        FullScreenUIHandler.hideStatusBar(this);
        FullScreenUIHandler.hideNavigationBar(this);


        JavaScriptEnabler.enable(webView);

        webAppInterface = new WebAppInterface(this, webView);

        webView.addJavascriptInterface(webAppInterface, "Android");

        fileChooserHelper = new FileChooserHelper(this, this);

        WebViewClientSetup.setClient(webView);
        WebViewLoader.loadFromAssets(webView, "index.html");

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, WebChromeClient.FileChooserParams fileChooserParams) {
                fileChooserHelper.openFileChooser(webView, filePathCallback);
                return true;
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, android.content.Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        fileChooserHelper.onFileChooserResult(requestCode, resultCode, data);
    }

    @Override
    public void onBackPressed() {
        if (WebViewBackHandler.canGoBack(webView)) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
