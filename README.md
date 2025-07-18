# Link2WhatsApp Chrome Extension

Link2WhatsApp is a Chrome extension that lets you quickly save and send the current tab's URL to your WhatsApp, along with an optional note. It's perfect for sharing links with yourself or others, or for saving articles to read later.

## Features
- Save your WhatsApp number securely in your browser.
- Instantly grab the current tab's URL.
- Add an optional note before sending.
- Sends the link and note to your WhatsApp via a backend API.

## How It Works
1. Install the extension in Chrome.
2. Click the extension icon to open the popup.
3. Enter and save your WhatsApp number (with country code, e.g., +91XXXXXXXXXX).
4. The extension will display the current tab's URL and let you add a note.
5. Click "Send to WhatsApp" to send the link and note to your WhatsApp.

## Installation
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select the extension folder.
5. The Link2WhatsApp icon will appear in your Chrome toolbar.

## Permissions
- `tabs`: To get the current tab's URL.
- `storage`: To save your WhatsApp number securely.
- `scripting`: For Chrome extension scripting APIs.
- `host_permissions`: To allow API requests to the backend server.


## Backend API
This extension requires a backend API to forward messages to WhatsApp. The default endpoint is:

```
https://link2whatsapp-backend.vercel.app/api/sendToWhatsapp
```

The backend source code and deployment instructions can be found here: [link2whatsapp-backend (GitHub)](https://github.com/iamRahul21/link2whatsapp-backend)

> **Note:** The backend must support CORS requests from Chrome extensions.

## Contributing
Pull requests and suggestions are welcome! For major changes, please open an issue first to discuss what you would like to change.