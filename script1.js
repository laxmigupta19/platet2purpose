// Toggle switch logic
function toggleFoodType() {
    const toggle = document.getElementById('foodToggle');
    const vegLabel = document.getElementById('vegLabel');
    const nonvegLabel = document.getElementById('nonvegLabel');
    if (toggle.checked) {
      vegLabel.style.color = 'green';
      nonvegLabel.style.color = 'lightgray';
    } else {
      vegLabel.style.color = 'lightgray';
      nonvegLabel.style.color = 'red';
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('foodToggle');
    if (toggle) toggle.addEventListener('change', toggleFoodType);
  });
  