document.addEventListener('DOMContentLoaded', () => {
    (function identifyWeekday() {
        const articles = document.querySelectorAll('.weekday'),
        days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        currentDay = (new Date().getDay()) - 1;

        for(let i = 0; i < days.length; i++) {
            if (i === 5 || i === 6) {
                articles[i].style.fontStyle = 'italic';
            } else if (i === currentDay) {
                articles[i].style.fontWeight = '700';
            }

            articles[i].textContent = days[i];
        }

        return;
    })()
})