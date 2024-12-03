document.addEventListener('DOMContentLoaded', () => {
    // Handle rating buttons
    const ratingGroups = document.querySelectorAll('[data-rating]');
    ratingGroups.forEach(group => {
        const buttons = group.querySelectorAll('.rating-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            });
        });
    });

    // Handle yes/no buttons
    const yesNoGroups = document.querySelectorAll('[data-yesno]');
    yesNoGroups.forEach(group => {
        const buttons = group.querySelectorAll('.yes-no-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            });
        });
    });

    // Handle form submission
    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
    });

    // Update progress bar
    const inputs = form.querySelectorAll('input, select, textarea');
    const progressBar = document.getElementById('progress');
    
    const updateProgress = () => {
        const total = inputs.length;
        const filled = Array.from(inputs).filter(input => input.value.trim() !== '').length;
        const progress = (filled / total) * 100;
        progressBar.style.width = `${progress}%`;
    };

    inputs.forEach(input => {
        input.addEventListener('input', updateProgress);
    });
});