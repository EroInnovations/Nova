package com.elite.qel_medistore_manager;

import android.content.Context;
import android.widget.Toast;

public class ToastHelper {
    private Context context;

    public ToastHelper(Context context) {
        this.context = context;
    }

    public void showToast(String message) {
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show();
    }
}
