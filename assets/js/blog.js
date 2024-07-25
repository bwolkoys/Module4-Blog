let darkMode = false
const toggle = document.getElementById('toggle');
        const body = document.body;

        toggle.addEventListener('click', function() {
            if (!darkMode) {
                body.classList.add('dark-mode');
                darkMode = true
            } else {
                body.classList.remove('dark-mode');
                darkMode = false
            }
        });