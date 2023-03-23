const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelectorAll('.book');

fontSize.forEach(el => {
    el.addEventListener('click', () => {
        if (el.classList.contains('font-size_small')) {
            fontSize.classList.remove('font-size_active');
            el.classList.add('font-size_active');
            book.classList.add('book_fs-small');

            return false;
        }

        if (el.classList.contains('font-size_big')) {
            fontSize.classList.remove('font-size_active');
            el.classList.add('font-size_active');
            book.classList.add('book_fs-big');

            return false;
        }
    })
})
