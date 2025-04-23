package com.elite.testing;

import android.app.Activity;
import android.content.Context;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import android.Manifest;
import android.content.pm.PackageManager;


public class WebAppInterface {
    private WebView webView;
    private DialogHelper dialogHelper;
    private ToastHelper toastHelper;
    private VibrationHelper vibrationHelper;
    private NotificationHelper notificationHelper;
    private ContactHelper contactHelper;
    private BatteryHelper batteryHelper;
    private Context context;
    private Activity activity;

    WebAppInterface(Context context, WebView webView, Activity activity) {
        this.context = context;
        this.activity = activity;
        this.webView = webView;
        this.dialogHelper = new DialogHelper(context, this);
        this.toastHelper = new ToastHelper(context);
        this.vibrationHelper = new VibrationHelper(context);
        this.notificationHelper = new NotificationHelper(context);
        this.contactHelper = null; 
        this.batteryHelper = new BatteryHelper(context); 
    }

    @JavascriptInterface
    public void showAlert(String message) {
        dialogHelper.showAlert(message);
    }

    @JavascriptInterface
    public void showConfirm(String message) {
        dialogHelper.showConfirm(message);
    }

    @JavascriptInterface
    public void showPrompt(String message) {
        dialogHelper.showPrompt(message);
    }

    @JavascriptInterface
    public void showToast(String message) {
        toastHelper.showToast(message);
    }

    @JavascriptInterface
    public void vibrate(long duration) {
        vibrationHelper.vibrate(duration);
    }

    @JavascriptInterface
    public void showNotification(String title, String message) {
        notificationHelper.showNotification(title, message);
    }

    @JavascriptInterface
    public void requestContactPermission() {
        if (!hasContactPermission()) {
            ActivityCompat.requestPermissions(activity, new String[]{
                    Manifest.permission.READ_CONTACTS,
                    Manifest.permission.WRITE_CONTACTS
            }, 1);
        }
    }

    @JavascriptInterface
    public boolean hasContactPermission() {
        return ContextCompat.checkSelfPermission(context, Manifest.permission.READ_CONTACTS) == PackageManager.PERMISSION_GRANTED &&
               ContextCompat.checkSelfPermission(context, Manifest.permission.WRITE_CONTACTS) == PackageManager.PERMISSION_GRANTED;
    }

    private void initializeContactHelper() {
        if (contactHelper == null) {
            contactHelper = ContactHelper.getInstance(context);
        }
    }

    @JavascriptInterface
    public String getContacts() {
        if (!hasContactPermission()) {
            requestContactPermission();
            return "Permission required!";
        }
        initializeContactHelper();
        return contactHelper.getContacts();
    }

    @JavascriptInterface
    public boolean createContact(String name, String phone) {
        if (!hasContactPermission()) {
            requestContactPermission();
            return false;
        }
        initializeContactHelper();
        return contactHelper.createContact(name, phone);
    }

    @JavascriptInterface
    public boolean updateContact(String name, String newPhone) {
        if (!hasContactPermission()) {
            requestContactPermission();
            return false;
        }
        initializeContactHelper();
        return contactHelper.updateContact(name, newPhone);
    }

    @JavascriptInterface
    public boolean deleteContact(String name) {
        if (!hasContactPermission()) {
            requestContactPermission();
            return false;
        }
        initializeContactHelper();
        return contactHelper.deleteContact(name);
    }

    public void onConfirmResult(boolean result) {
        webView.post(() -> webView.evaluateJavascript("handleConfirmResult(" + result + ");", null));
    }

    public void onPromptResult(String input) {
        webView.post(() -> webView.evaluateJavascript("handlePromptResult('" + (input != null ? input : "") + "');", null));
    }

    @JavascriptInterface
    public String getBatteryStatus() {
        return batteryHelper.getBatteryStatus();
    }
}
