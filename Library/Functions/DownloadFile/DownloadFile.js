const  DOWNLOADIMAGE=(base64String, filename)=> {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to the base64 string
    link.href = base64String;
    
    // Set the download attribute with the filename
    link.download = filename;
    
    // Trigger the download by simulating a click
    link.click();
}
export{DOWNLOADIMAGE};