const logo = document.querySelectorAll("#logo path");
const strokeColor = '#111'  
for (let i = 0; i < logo.length; i++) {
    // console.log(i, logo[i].getTotalLength());
    let timeOffset = (logo.length - i - 1) * 300;
    logo[i].style.strokeDasharray = logo[i].getTotalLength() + "px";
    logo[i].style.strokeDashoffset = logo[i].getTotalLength() + "px";
    logo[i].style.animation = `show-line 1s ease forwards ${timeOffset}ms`;
    logo[i].setAttribute('stroke', strokeColor)
}

const scrollProgressElement = document.getElementById('scroll-progress')
console.log(scrollProgressElement)


window.onscroll = function() {
    scrollProgress = document.body.scrollY || document.documentElement.scrollTop;
    maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progress = scrollProgress / maxScroll
    // console.log(scrollProgress, maxScroll, progress)
    // console.log(scrollProgressElement.children)
    // scrollProgressElement.children[0].style.width = `${progress * 100}%`
    scrollProgressElement.children[0].style.webkitMaskImage = `linear-gradient(90deg, #000 ${progress * 100}%, #0000 ${progress * 100}%)`
    console.log(scrollProgressElement.children[0].style.mask)
};