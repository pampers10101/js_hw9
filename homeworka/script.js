document.getElementById('generateBtn').addEventListener('click', function() {
    const lengthInput = document.getElementById('length');
    const length = parseInt(lengthInput.value, 10);
    
    if (isNaN(length) || length < 1) {
        alert('Введите корректную длину (целое число больше 0).');
        return;
    }

    const useDigits = document.getElementById('digits').checked;
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;

    if (!useDigits && !useUppercase && !useLowercase) {
        alert('Выберите хотя бы один тип символов.');
        return;
    }
    let chars = '';
    if (useDigits) chars += '0123456789';
    if (useUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';

    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }

    document.getElementById('output').value = result;
});