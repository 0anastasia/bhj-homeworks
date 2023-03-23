const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelectorAll('.book');

let removeFS = () => {
    fontSize.forEach(remove => {
        remove.classList.remove('font-size_active');
    });
} 

fontSize.forEach(el => {
    el.onclick = () => {
        if (el.classList.contains('font-size_small')) {
            removeFS();
            el.classList.add('font-size_active');
            book.classList.add('book_fs-small');

            return false;
        }

        if (el.classList.contains('font-size_big')) {
            removeFS();
            el.classList.add('font-size_active');
            book.classList.add('book_fs-big');

            return false;
        }
    }
    
});
