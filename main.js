let currentIndex = 0;
const intervalId = setInterval(nextSlide, 5000);
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        item.style.display = 'none';
    });
    items[index].classList.add('active');
    items[index].style.display = 'block';
    items[index].style.opacity = '1';
    items[index].style.transform = 'scale(1)';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
}

showSlide(currentIndex);
