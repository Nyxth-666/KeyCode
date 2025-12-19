## KeyCode

KeyCode is a simple web utility that shows real-time keyboard event data. Press any key and the page will display the <b>event.key</b>, event.code, event.which, and event.keyCode values from the JavaScript keydown event.

This tool is useful for developers, learners, and anyone curious about how browser keyboard events work.

## Live Demo

[https://nyxth-666.github.io/KeyCode/](https://nyxth-666.github.io/KeyCode/)

## How It Works

When you press a key on your keyboard:

The site listens for the keydown event in JavaScript.

It then displays:

event.key — The value of the key pressed (e.g., "a", "Enter").

event.code — The physical key on the keyboard (e.g., "KeyA", "Enter").

event.which — Legacy numeric code for the key (deprecated).

event.keyCode — Legacy numeric code (deprecated).

This live visualization helps you understand differences between the standard and legacy keyboard properties.

🛠 Features

📟 Detects and displays keyboard event properties in real time.

🧪 Useful for debugging keybindings, game controls, web apps, etc.

💡 Minimal and clean interface.

📁 Project Structure
KeyCode/
├─ index.html       ← Main page showing key event output
├─ script.js        ← JS logic for keyboard events (if separated)
├─ styles.css       ← Optional styling
└─ README.md        ← You are here!


Note: In the simplest version, everything may be in index.html.

🧩 Example Output

After pressing a key, the page updates like:

event.key:        "a"
event.code:       "KeyA"
event.which:      65
event.keyCode:    65

💻 Usage

Open the page in your browser.

Click anywhere or ensure the page is focused.

Press any key.

Watch the displayed values update.

ℹ️ Why This Is Useful

🎮 Helps game developers map controls.

🔧 Useful for debugging key event issues in apps.

🧑‍💻 Great for learning about JavaScript keyboard events.

📊 Visualizes key event properties live in the browser.

🧪 Browser Compatibility

This tool relies on standard DOM keyboard events supported by all modern browsers.

Note: event.which and event.keyCode are legacy and may not be recommended for new projects; use event.key and event.code instead where possible. 
nyxth-666.github.io

📜 License

You can add your preferred license here (e.g., MIT, Apache 2.0).

📬 Feedback

For suggestions or issues, open a GitHub issue or contact the project maintainer.