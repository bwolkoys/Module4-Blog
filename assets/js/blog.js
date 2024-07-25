const toggle = document.getElementById('toggle');
        const body = document.body;

        toggle.addEventListener('change', function() {
            if (toggle.checked) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        });
const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', function() {
    window.location.href = 'module4-blog/index.html';
});