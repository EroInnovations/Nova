package com.elite.qel_medistore_manager;

import android.webkit.WebView;

public class WebViewBackHandler {
    public static boolean canGoBack(WebView webView) {
        return webView != null && webView.canGoBack();
    }
}
