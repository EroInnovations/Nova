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

        // Set the content view first to load the layout with the WebView
        setContentView(R.layout.activity_main);

        // Initialize the WebView
        webView = findViewById(R.id.webView);

        // Enable Full-Screen UI and make WebView take full screen
        FullScreenUIHandler.setupFullscreen(this, webView);

        // Enable JavaScript and other settings for WebView
        JavaScriptEnabler.enable(webView);

        // Initialize WebAppInterface
        webAppInterface = new WebAppInterface(this, webView, this);

        // Add a JavaScript interface to communicate with JS
        webView.addJavascriptInterface(webAppInterface, "Android");

        // Initialize FileChooserHelper
        fileChooserHelper = new FileChooserHelper(this, this);

        // Set WebViewClient and load the assets
        WebViewClientSetup.setClient(webView);
        WebViewLoader.loadFromAssets(webView, "index.html");

        // Set WebChromeClient for file selection
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
