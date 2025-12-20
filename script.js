window.addEventListener('keydown', function(e) {
    const keyCode = e.keyCode;
    const key = e.key;
    const code = e.code;
    const which = e.which;
    const keySelect = document.getElementById('keySelect');
    const keyInput = document.getElementById('keyInput');

    document.getElementById('keyCode').textContent = keyCode;
    document.getElementById('eventKey').textContent = key;
    document.getElementById('eventCode').textContent = code;
    document.getElementById('eventWhich').textContent = which;
    document.getElementById('eventKeyCode').textContent = keyCode;

    console.log(`Key: ${key}, Code: ${code}, KeyCode: ${keyCode}, Which: ${which}`);
});