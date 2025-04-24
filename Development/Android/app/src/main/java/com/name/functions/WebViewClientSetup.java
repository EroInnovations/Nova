package com.elite.qel_medistore;

import android.app.AlertDialog;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.view.View;
import android.webkit.*;

public class WebViewClientSetup {
    
    public static void setClient(WebView webView) {
        webView.setWebViewClient(new CustomWebViewClient(webView));
        webView.setWebChromeClient(new CustomWebChromeClient(webView.getContext()));
        webView.addJavascriptInterface(new WebAppInterface(webView), "EliteWebInterface");
    }
    
    private static class CustomWebViewClient extends WebViewClient {
        private final WebView webView;

        public CustomWebViewClient(WebView webView) {
            this.webView = webView;
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            view.setAlpha(0f);
            view.setVisibility(View.VISIBLE);
            view.animate().alpha(1f).setDuration(300).start();
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            return handleDeepLink(view, request.getUrl().toString());
        }

        private boolean handleDeepLink(WebView view, String url) {
            Uri uri = Uri.parse(url);
            Intent intent = new Intent(Intent.ACTION_VIEW, uri);
            PackageManager pm = view.getContext().getPackageManager();

            if (intent.resolveActivity(pm) != null) {
                view.getContext().startActivity(intent);
            } else {
                view.loadUrl(url); 
            }
            return true;
        }
    }

    private static class CustomWebChromeClient extends WebChromeClient {
        private final String appName;

        public CustomWebChromeClient(Context context) {
            this.appName = getApplicationName(context);
        }

        @Override
        public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
            showDialog(view, appName, message, result);
            return true;
        }

        @Override
        public boolean onJsConfirm(WebView view, String url, String message, JsResult result) {
            showDialog(view, appName, message, result);
            return true;
        }

        @Override
        public boolean onJsPrompt(WebView view, String url, String message, String defaultValue, JsPromptResult result) {
            showPromptDialog(view, appName, message, defaultValue, result);
            return true;
        }

        private void showDialog(WebView view, String title, String message, JsResult result) {
            new AlertDialog.Builder(view.getContext())
                .setTitle(title)
                .setMessage(message)
                .setPositiveButton("OK", (dialog, which) -> result.confirm())
                .setNegativeButton("Cancel", (dialog, which) -> result.cancel())
                .show();
        }

        private void showPromptDialog(WebView view, String title, String message, String defaultValue, JsPromptResult result) {
            android.widget.EditText input = new android.widget.EditText(view.getContext());
            input.setText(defaultValue);

            new AlertDialog.Builder(view.getContext())
                .setTitle(title)
                .setMessage(message)
                .setView(input)
                .setPositiveButton("OK", (dialog, which) -> result.confirm())
                .setNegativeButton("Cancel", (dialog, which) -> result.cancel())
                .show();
        }

        private String getApplicationName(Context context) {
            PackageManager packageManager = context.getPackageManager();
            ApplicationInfo applicationInfo;
            try {
                applicationInfo = packageManager.getApplicationInfo(context.getPackageName(), 0);
            } catch (PackageManager.NameNotFoundException e) {
                applicationInfo = null;
            }
            return (applicationInfo != null) ? packageManager.getApplicationLabel(applicationInfo).toString() : "App";
        }
    }

    // JavaScript Interface to Handle window.close()
    public static class WebAppInterface {
        private final WebView webView;

        public WebAppInterface(WebView webView) {
            this.webView = webView;
        }

        @JavascriptInterface
        public void closeWebView() {
            webView.loadUrl("file:///android_asset/index.html");
        }
    }
}
