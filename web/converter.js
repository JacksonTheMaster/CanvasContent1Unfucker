function convertToClean() {
    let inputText = document.getElementById('inputText').value;
    
    // Perform the replacements for cleaning the string
    let cleanedText = inputText.replace(/\\\\/g, "###QUOTE###")
                               .replace(/\\"/g, "\"")
                               .replace(/##QUOTE##/g, "\\")
                               .replace(/###QUOTE###/g, "\\"); // Replace the placeholder with a single backslash
    
    // Handle the specific issue by replacing #\# with \
    cleanedText = cleanedText.replace(/#\\#/g, "\\");

    // Display the cleaned text in the output box
    document.getElementById('outputText').value = cleanedText;

    // Attempt to parse and display as JSON
    displayAsJson(cleanedText);
}

function convertToRaw() {
    let outputText = document.getElementById('outputText').value;
    
    // Reverse the process: Replace \ with ###QUOTE###, then " with \", and finally ###QUOTE### with \\\\
    let rawText = outputText.replace(/\\/g, "###QUOTE###")
                            .replace(/"/g, "\\\"")
                            .replace(/###QUOTE###/g, "\\\\");

    // Minify the raw text by removing all spaces, tabs, newlines, and line breaks
    rawText = rawText.replace(/\s+/g, "");

    // Display the raw text back in the input box
    document.getElementById('inputText').value = rawText;
}

function displayAsJson(cleanedText) {
    let jsonOutputBox = document.getElementById('jsonOutput');
    try {
        // Attempt to parse the cleaned text as JSON
        let jsonObject = JSON.parse(cleanedText);

        // Pretty-print the JSON object
        jsonOutputBox.value = JSON.stringify(jsonObject, null, 4);
    } catch (e) {
        // Output the error for debugging purposes
        console.error("JSON parse error:", e);

        // If parsing fails, indicate that the content is not valid JSON
        jsonOutputBox.value = "Invalid JSON or not a JSON format. Relax though. Just use VsCode & the Prettier - Code formatter extension";
    }
}