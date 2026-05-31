document.querySelectorAll('.copy-row').forEach(row => {

    row.addEventListener('click', async () => {

        const commitMessage = row
            .querySelector('.tag')
            .textContent
            .trim();

        try {
            await navigator.clipboard.writeText(commitMessage);

            const originalBg = row.style.background;

            row.style.background = 'rgba(80, 250, 123, .8)';

            setTimeout(() => {
                row.style.background = originalBg;
            }, 600);

        } catch (err) {
            console.error('Erro ao copiar:', err);
        }
    });

});

const toast = document.getElementById('toast');

document.querySelectorAll('.copy-row').forEach(row => {
    row.addEventListener('click', async () => {

        const text = row.querySelector('.tag').textContent.trim();

        await navigator.clipboard.writeText(text);

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    });
});