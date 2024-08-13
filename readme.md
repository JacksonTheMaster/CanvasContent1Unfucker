# SharePoint CanvasContent1 Soup Converter

## Overview

The SharePoint CanvasContent1 Soup Converter is a tool designed to help developers and administrators who work with SharePoint's CanvasContent1 JSON data. This data can often be complex, nested, HTML, and difficult to read or edit. The tool allows you to decode and reformat this JSON data, making it easier to manage, edit, and re-integrate back into your workflows. It's meant to be used by copying a CanvasContent1 soup from a recored or somehow else retrieved http call to the Sharepooint API into the first text box. The SharePoint CanvasContent1 Soup Converter will then decode your JSON so it can be sorted using a code formatter like Prettier and then edited as needed without wanting to shoot yourself in the foot editing a single line of Json, fucked with 6000 Backslashes. After this editing is done, the tool can re-encode your JSON back into its original format for use in API calls, reSouping your nicely formatted JSON back into a CanvasContent1 soup. Yay!

## Why I Made This Tool

As someone who regularly interacts with SharePoint's APIs, I found that working with CanvasContent1 data was a frustrating experience due to its complexity and poor readability. The nested JSON structures and escape characters make it challenging to understand the data at a glance, let alone edit it effectively. Specifically, I was editing a single line of JSON and had to fuck with 6000 Backslashes. I tried handling the file manually, but soon realized I need to make this tool to make my life easier. And yours, dear reader.

## Tool Availability

You can access the tool at the following URLs:
- [https://soup.öl.io](https://soup.öl.io)
- [https://soup.jlangisch.de](https://soup.jlangisch.de)

or just use the [docker image](https://hub.docker.com/r/jmgitde/canvascontent1unfucker) directly, it's port 80.
Alternatively, you can run the tool the old school way by gathering web/converter.js and web/index.html. Putting them in the same folder and double clicking index.html should work fine for windows. If you're on some other OS, you either know what you're doing or you use a Mac. In both cases, you are on your own. Smile, it's gonna be fine.
## How It Works

### Features
- **UnSoup**: Converts your raw CanvasContent1 JSON into a readable and formatted version.
- **reSoup**: Minifies and converts your edited JSON back to its original format for use in API calls.
- **JsonPreview & Editor**: Preview and edit your JSON in a nice and clean way, directly in the browser. Resize the textareas to make them bigger or smaller.

### How to Use
refer to the latest instructions on the webApp itself:
- [https://soup.jlangisch.de](https://soup.jlangisch.de)

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this tool as you see fit. Let me know if you do, I'd love to hear about it. Feel free to make a pull request if you want to contribute.

## Additional Information

For any issues or contributions, please refer to the project's repository or contact JMG IT / JacksonTheMaster.

---

Enjoy your soup, served just the way you like it!
