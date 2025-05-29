document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const guitarItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      guitarItems.forEach(item => {
        const brand = item.getAttribute('data-brand');

        if (filter === 'all' || brand === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Update button styles
      filterButtons.forEach(btn => btn.classList.remove('bg-yellow-600', 'text-white'));
      button.classList.add('bg-yellow-600', 'text-white');
    });
  });
});
