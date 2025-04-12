// JS for filter and toggle actions (basic setup)

document.getElementById('vegToggle').addEventListener('change', function () {
    const donorCards = document.querySelectorAll('.donor-card');
    donorCards.forEach(card => {
      const content = card.textContent.toLowerCase();
      if (this.checked && !content.includes('veg')) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    });
  });
  
  document.getElementById('searchInput').addEventListener('input', function () {
    const keyword = this.value.toLowerCase();
    const donorCards = document.querySelectorAll('.donor-card');
    donorCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(keyword)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
    