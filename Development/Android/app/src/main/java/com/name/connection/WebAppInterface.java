package com.elite.testing;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

public class WebAppInterface {

    private WebView webView;
    private DialogHelper dialogHelper;
    private ToastHelper toastHelper;
    private VibrationHelper vibrationHelper;
    private NotificationHelper notificationHelper;
    private ContactHelper contactHelper;
    private BatteryHelper batteryHelper;
    private WiFiHelper wifiHelper;
    private Context context;
    private AppCompatActivity activity;

    public WebAppInterface(AppCompatActivity activity, WebView webView) {
        this.context = activity;
        this.activity = activity;
        this.webView = webView;
        this.dialogHelper = new DialogHelper(context, this);
        this.toastHelper = new ToastHelper(context);
        this.vibrationHelper = new VibrationHelper(context);
        this.notificationHelper = new NotificationHelper(context);
        this.contactHelper = ContactHelper.getInstance(context);
        this.batteryHelper = new BatteryHelper(context);
        this.wifiHelper = new WiFiHelper(context);
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
    public String getContacts() {
        if (!hasContactPermission()) {
            return "Permission required!";
        }
        return contactHelper.getContacts();
    }

    @JavascriptInterface
    public boolean createContact(String name, String phone) {
        if (!hasContactPermission()) return false;
        return contactHelper.createContact(name, phone);
    }

    @JavascriptInterface
    public boolean updateContact(String name, String newPhone) {
        if (!hasContactPermission()) return false;
        return contactHelper.updateContact(name, newPhone);
    }

    @JavascriptInterface
    public boolean deleteContact(String name) {
        if (!hasContactPermission()) return false;
        return contactHelper.deleteContact(name);
    }

    @JavascriptInterface
    public String getBatteryStatus() {
        return batteryHelper.getBatteryStatus();
    }

    @JavascriptInterface
    public boolean isWiFiEnabled() {
        return wifiHelper.isWiFiEnabled();
    }

    @JavascriptInterface
    public void setWiFiEnabled(boolean enable) {
        wifiHelper.setWiFiEnabled(enable);
    }

    @JavascriptInterface
    public String getNetworkStatus() {
        return wifiHelper.getNetworkStatus();
    }

    @JavascriptInterface
    public String getAvailableNetworks() {
        if (!hasLocationPermission()) return "Permission required!";
        return wifiHelper.getAvailableNetworks();
    }

    @JavascriptInterface
    public void requestLocationPermission() {
        if (!hasLocationPermission()) {
            ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, 1);
        }
    }

    @JavascriptInterface
    public boolean hasContactPermission() {
        return ContextCompat.checkSelfPermission(context, Manifest.permission.READ_CONTACTS) == PackageManager.PERMISSION_GRANTED &&
               ContextCompat.checkSelfPermission(context, Manifest.permission.WRITE_CONTACTS) == PackageManager.PERMISSION_GRANTED;
    }

    @JavascriptInterface
    public boolean hasLocationPermission() {
        return ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED;
    }

    @JavascriptInterface
    public void hideStatusBar() {
        activity.runOnUiThread(() -> FullScreenUIHandler.hideStatusBar(activity));
    }

    @JavascriptInterface
    public void showStatusBar() {
        activity.runOnUiThread(() -> FullScreenUIHandler.showStatusBar(activity));
    }

    @JavascriptInterface
    public void hideNavigationBar() {
        activity.runOnUiThread(() -> FullScreenUIHandler.hideNavigationBar(activity));
    }

    @JavascriptInterface
    public void showNavigationBar() {
        activity.runOnUiThread(() -> FullScreenUIHandler.showNavigationBar(activity));
    }

    public void onConfirmResult(boolean result) {
        webView.post(() -> webView.evaluateJavascript("handleConfirmResult(" + result + ");", null));
    }

    public void onPromptResult(String input) {
        webView.post(() -> webView.evaluateJavascript("handlePromptResult('" + (input != null ? input : "") + "');", null));
    }
}
