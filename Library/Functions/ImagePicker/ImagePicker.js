const IMAGEPICKER = (imageElement, callback) => {
    const input = document.createElement("input");

    input.type = "file";
    input.style.display = "none";
    input.accept = "image/*";  // Accept only images

    // Append the input element to the body
    document.body.appendChild(input);

    // Event listener to handle image selection
    input.addEventListener("change", function () {
        var file = this.files[0];

        // If no file is selected, return early
        if (!file) return;

        var reader = new FileReader();

        reader.onload = function (event) {
            var image = new Image();

            // Set image source to the base64 data
            image.src = event.target.result;

            image.onload = function () {
                var maxWidth = 800;
                var maxHeight = 600;
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");

                var width = image.width;
                var height = image.height;

                // Resize the image based on its dimensions
                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }

                // Set canvas dimensions
                canvas.width = width;
                canvas.height = height;

                // Draw the resized image on the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0, width, height);

                var base64Data;

                // Depending on the image type, create the base64 data URL
                if (file.type === "image/png") {
                    base64Data = canvas.toDataURL("image/png");
                } else {
                    var quality = 0.7;
                    base64Data = canvas.toDataURL("image/jpeg", quality);

                    // Reduce quality if the base64 data size is too large
                    while (base64Data.length > 49800 && quality > 0) {
                        quality -= 0.1;
                        base64Data = canvas.toDataURL("image/jpeg", quality);
                    }
                }

                // If the base64 data is small enough, display it
                if (base64Data.length < 49800) {
                    imageElement.src = base64Data;
                    callback(base64Data);
                } else {
                    TOAST("Image Format Error");
                }
            };
        };

        // Read the selected file as data URL
        reader.readAsDataURL(file);
    });

    // Trigger the input element click to open the file picker dialog
    input.click();

    // Clean up by removing the input element
    input.remove();
};

export { IMAGEPICKER };