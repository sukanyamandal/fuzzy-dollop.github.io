const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and content
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

// Show the "Project Overview" tab by default
document.getElementById('overview').classList.add('active');