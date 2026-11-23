const searchForm = document.querySelector('#tour-search');
const toast = document.querySelector('#toast');

searchForm.addEventListener('submit', (event) => {
  event.preventEvent?.();
  event.preventDefault();
  const destination = document.querySelector('#destination').value.trim();
  toast.textContent = destination
    ? `Ищем лучшие туры: ${destination}`
    : 'Подбираем лучшие предложения...';
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3000);
});

document.querySelectorAll('.tour-card, .country-list a').forEach((card) => {
  card.addEventListener('click', () => {
    toast.textContent = 'Открываем подробности тура';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2500);
  });
});
