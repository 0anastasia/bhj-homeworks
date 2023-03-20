let reveal = document.querySelectorAll('.reveal');

window.onscroll = () => {
    reveal.forEach((el) => {
       let {top, bottom} = el.getBoundingClientRect();
       
       if (bottom < window.innerHeight && top > 0) {
            el.classList.add('reveal_active')
       } else {
            el.classList.remove('reveal_active');
       }
    })
}
