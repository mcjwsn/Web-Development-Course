document.addEventListener("DOMContentLoaded", () => {
    const mindl = document.getElementById("mindl");
    const maxdl = document.getElementById("maxdl");
    const wlit = document.getElementById("wlit");
    const spec = document.getElementById("spec");
    const genera = document.getElementById("genera");

    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const znakispecjalne = '0123456789!@#$%^&*(),.?":{}|<>'.split('');

    genera.addEventListener("click", () => {
        
        const minLength = parseInt(mindl.value);
        const maxLength = parseInt(maxdl.value);

        if (isNaN(minLength) || isNaN(maxLength) || minLength > maxLength) {
            alert("Proszę wprowadzić prawidłowe liczby w polach długości.");
            return;
        }

        function generator(len, wlit, spec) {
            let charSet = lowercaseLetters; 
            if (wlit.checked) {
                charSet = charSet.concat(uppercaseLetters);
            }
            if (spec.checked) {
                charSet = charSet.concat(znakispecjalne);
            }
            let password = '';
            for (let i = 0; i < len; i++) {
                const randomIndex = Math.floor(Math.random() * charSet.length);
                password += charSet[randomIndex];
            }
            return password;
        }

        function testy(password) {
            if (spec.checked && !/[!@#$%^&*(),.?":{}|<>0-9]/.test(password)) {
                return false;
            }
            if (wlit.checked && !/[A-Z]/.test(password)) {
                return false;
            }
            return true;
        }

        function gpass() {
            let len = randint(minLength, maxLength);
            let flag = false;
            let password;
            while (!flag) {
                password = generator(len, wlit, spec);
                if (testy(password)) {
                    flag = true;
                }
            }
            return password;
        }

        alert("Losowe haslo: " + gpass());
    });
});
