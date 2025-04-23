package com.elite.testing;

import android.os.Build;
import android.view.View;
import android.view.Window;
import android.webkit.WebView;
import androidx.appcompat.app.AppCompatActivity;

public class FullScreenUIHandler {

    public static void setupFullscreen(AppCompatActivity activity, WebView webView) {
        
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {

            activity.getWindow().setDecorFitsSystemWindows(false); 

        } else {

            activity.getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
                View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
                View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            );
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = activity.getWindow();
            window.setStatusBarColor(android.graphics.Color.TRANSPARENT);
            window.setNavigationBarColor(android.graphics.Color.TRANSPARENT);
        }

        webView.setFitsSystemWindows(false); 
    }
}
