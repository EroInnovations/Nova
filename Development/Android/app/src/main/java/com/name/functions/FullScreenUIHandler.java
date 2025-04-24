package com.elite.testing;

import android.os.Build;
import android.view.View;
import android.view.Window;
import androidx.appcompat.app.AppCompatActivity;

public class FullScreenUIHandler {

    public static void hideStatusBar(AppCompatActivity activity) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            activity.getWindow().setDecorFitsSystemWindows(false);
        } else {
            activity.getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_FULLSCREEN
            );
        }
    }

    public static void showStatusBar(AppCompatActivity activity) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            activity.getWindow().setDecorFitsSystemWindows(true);
        } else {
            activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_VISIBLE);
        }
    }

    public static void hideNavigationBar(AppCompatActivity activity) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            activity.getWindow().setDecorFitsSystemWindows(false);
        } else {
            activity.getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            );
        }
    }

    public static void showNavigationBar(AppCompatActivity activity) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            activity.getWindow().setDecorFitsSystemWindows(true);
        } else {
            activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_VISIBLE);
        }
    }

    public static void makeSystemBarsTransparent(AppCompatActivity activity) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Window window = activity.getWindow();
            window.setStatusBarColor(android.graphics.Color.TRANSPARENT);
            window.setNavigationBarColor(android.graphics.Color.TRANSPARENT);
        }
    }
}