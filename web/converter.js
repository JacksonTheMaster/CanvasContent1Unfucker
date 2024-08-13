document.getElementById('outputText').addEventListener('input', handleJsonDisplay);

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
    handleJsonDisplay();
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

function handleJsonDisplay() {
    let cleanedText = document.getElementById('outputText').value;
    let jsonOutputBox = document.getElementById('jsonOutput');

    // Split the text based on patterns that likely indicate the end of one JSON object and the start of another
    let jsonObjects = cleanedText.split(/(?<=\}\s*),\s*(?=\{)/g);

    // Clear the current JSON output box
    jsonOutputBox.value = '';

    jsonObjects.forEach((jsonObject, index) => {
        try {
            // Attempt to parse each JSON object separately
            let parsedObject = JSON.parse(jsonObject);

            // Pretty-print the parsed JSON object
            jsonOutputBox.value += `${JSON.stringify(parsedObject, null, 4)}`;

            // Add a comma and newline after each object except the last one
            if (index < jsonObjects.length - 1) {
                jsonOutputBox.value += ',\n';
            }
        } catch (e) {
            // If parsing fails, show an error message but still display the raw text
            jsonOutputBox.value += `Invalid JSON or not a JSON format. Check the raw Output box...;'\n\n`;
        }
    });
}