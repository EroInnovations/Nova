const AUDIOMATHS = (audioElement, callback) => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    input.accept = "audio/*";
    document.body.appendChild(input);

    input.addEventListener("change", function () {
        var file = this.files[0];
        if (!file) return;

        var reader = new FileReader();
        reader.onload = function (event) {
            var base64Data = event.target.result;
            var { chunks, modulus } = splitBase64Data(base64Data, 50000);
            
            if (chunks.length > 0) {
                // Set the base64 data as the audio source and trigger playback
                audioElement.src = chunks[0]; // Play the first chunk
                audioElement.play();

                // Callback to handle the chunks and modulus
                callback(chunks, modulus);
            } else {
                TOAST("Unable to split the audio data correctly.");
            }
        };
        reader.readAsDataURL(file);
    });

    input.click();
    input.remove();

    function splitBase64Data(base64Data, chunkSize) {
        var chunks = [];
        var modulus = base64Data.length % chunkSize;
        
        // Split the base64 string into chunks of `chunkSize` bytes
        for (var i = 0; i < base64Data.length; i += chunkSize) {
            chunks.push(base64Data.substring(i, i + chunkSize));
        }

        return { chunks, modulus };
    }
};

export { AUDIOMATHS };
