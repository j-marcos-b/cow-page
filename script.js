function openModal(type) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (type === 'cover') {
        modalImg.src = 'images/portada.png';
    } else if (type === 'back') {
        modalImg.src = 'images/contraportada.png';
    }
    
    modal.style.display = 'flex';
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    modal.classList.remove('active');
}

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Close modal when clicking the close button
document.querySelector('.close').addEventListener('click', function(event) {
    event.stopPropagation();
    closeModal();
});
