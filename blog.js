 function openModal(title, imgSrc, description) {
      document.getElementById('modal-title').innerText = title;
      document.getElementById('modal-img').src = imgSrc;
      document.getElementById('model-description').innerText = description;
      document.getElementById('modal').style.display = 'flex';
    }
    function closeModal(event) {
      if (event.target.classList.contains('modal') || event.target.classList.contains('close-btn')) {
        document.getElementById('modal').style.display = 'none';
      }
    }
    
      function toggleReadMore(button) {
    const text = button.previousElementSibling;

    if (text.classList.contains('expanded')) {
      text.classList.remove('expanded');
      button.innerText = 'Read More';
    } else {
      text.classList.add('expanded');
      button.innerText = 'Show Less';
    }
  }