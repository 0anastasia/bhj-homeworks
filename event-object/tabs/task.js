const tabs = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((el, i) => {
    el.onclick = () => {
        tabs.forEach((deleted) => {
            deleted.classList.remove('tab_active');
        })
        contents.forEach((content) => {
            content.classList.remove('tab__content_active');
        })

        el.classList.add('tab_active');
        contents[i].classList.add('tab__content_active');
    }
});
