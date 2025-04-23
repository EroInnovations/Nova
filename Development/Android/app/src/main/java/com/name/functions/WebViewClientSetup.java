package com.elite.testing;

import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebViewClientSetup {
    public static void setClient(WebView webView) {
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                view.setAlpha(0f);
                view.setVisibility(View.VISIBLE);
                view.animate().alpha(1f).setDuration(300).start();
            }
        });
    }
}
