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

    // keySelect.addEventListener('change', (e) => {
    //     const selectedValue = e.target.value;
    //     console.log(`Dropdown selected: ${e.target.value}`);
    //     document.getElementById('keyCode').textContent = selectedValue;
    //     document.getElementById('eventKey').textContent = selectedValue;
    //     document.getElementById('eventCode').textContent = selectedValue;
    //     document.getElementById('eventWhich').textContent = selectedValue;
    //     document.getElementById('eventKeyCode').textContent = selectedValue;
    // });

    // keyInput.addEventListener('keydown', (e) => {
    //     console.log(`Key pressed: ${e.key}, code: ${e.code}`);
    //     // Hook into your event display logic here
    // });

    console.log(`Key: ${key}, Code: ${code}, KeyCode: ${keyCode}, Which: ${which}`);
});