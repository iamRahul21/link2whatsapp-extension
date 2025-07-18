document.addEventListener("DOMContentLoaded", () => {
    const setupDiv = document.getElementById("setup");
    const mainUIDiv = document.getElementById("mainUI");
    const phoneInput = document.getElementById("phoneInput");
    const saveBtn = document.getElementById("saveNumberBtn");
    const urlText = document.getElementById("urlText");
    const noteInput = document.getElementById("note");
    const sendBtn = document.getElementById("sendBtn");

    chrome.storage.sync.get("whatsappNumber", (result) => {
        if (result.whatsappNumber) {
            setupDiv.style.display = "none";
            mainUIDiv.style.display = "block";

            // Get current tab URL
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const currentURL = tabs[0].url;
                urlText.textContent = currentURL;

                sendBtn.onclick = () => {
                    const note = noteInput.value;
                    const phone = result.whatsappNumber;

                    const data = {
                        phone,
                        url: currentURL,
                        note
                    };
                    if (!phone || phone.length < 10) {
                        alert("Please set a valid WhatsApp number first.");
                        return;
                    }
                    fetch("https://link2whatsapp-backend.vercel.app/api/sendToWhatsapp", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    })
                        .then(() => alert("Sent to WhatsApp!"))
                        .catch(err => alert("Failed to send: " + err.message));
                };
            });

        } else {
            setupDiv.style.display = "block";
            mainUIDiv.style.display = "none";

            saveBtn.onclick = () => {
                const number = phoneInput.value.trim();
                if (!number.startsWith("+") || number.length < 10) {
                    alert("Please enter a valid WhatsApp number with country code.");
                    return;
                }
                chrome.storage.sync.set({ whatsappNumber: number }, () => {
                    location.reload();
                });
            };
        }
    });
});