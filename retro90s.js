
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.retro-tab');
    const contents = {
        'Overview': document.getElementById('tab-overview'),
        'Examples': document.getElementById('tab-examples'),
        'Changelog': document.getElementById('tab-changelog')
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            Object.values(contents).forEach(c => c.style.display = 'none');
            const selected = contents[tab.textContent.trim()];
            if (selected) selected.style.display = 'block';
        });
    });
});
