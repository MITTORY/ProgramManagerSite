// Обработка скачивания программы
document.querySelectorAll('.btn-download, .btn-download-large').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const link = document.createElement('a');
        link.href = 'download/program_manager.rar';
        link.download = 'ProgramManager.rar';
        
        // Добавляем таймер для отслеживания ошибок
        const timeout = setTimeout(() => {
            document.body.removeChild(link);
            console.error('Download timeout');
        }, 5000);

        link.onload = () => {
            clearTimeout(timeout);
            document.body.removeChild(link);
        };

        document.body.appendChild(link);
        link.click();
    });
});