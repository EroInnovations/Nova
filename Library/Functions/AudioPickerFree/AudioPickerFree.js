const AUDIOPICKERFREE = (audioElement, callback) => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    input.accept = "audio/*";
    document.body.appendChild(input);

    input.addEventListener("change", function () {
        var file = this.files[0];
        if (!file) return;

        // Check the file size (10MB = 10 * 1024 * 1024 bytes)
        const MAX_SIZE = 10 * 1024 * 1024; // 10MB
        if (file.size > MAX_SIZE) {
            TOAST("The file is too large. Please select a file smaller than 10MB.");
            return;
        }

        var reader = new FileReader();
        reader.onload = function (event) {
            var base64Data = event.target.result;
            var compressedBase64Data = resizeBase64Data(base64Data, 49800);
            if (compressedBase64Data) {
                // Set the base64 data as the audio source and trigger playback
                audioElement.src = compressedBase64Data;
                audioElement.play();
                callback(compressedBase64Data);
            } else {
                TOAST("Unable to resize the audio data within the character limit.");
            }
        };
        reader.readAsDataURL(file);
    });

    input.click();
    input.remove();

    function resizeBase64Data(base64Data, targetSize) {
        if (base64Data.length <= targetSize) {
            return base64Data;
        }
        return base64Data.substring(0, targetSize);
    }
};

export { AUDIOPICKERFREE };
