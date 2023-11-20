const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
    // console.log(i, logo[i].getTotalLength());
    let timeOffset = (logo.length - i - 1) * 300
    logo[i].style.strokeDasharray = logo[i].getTotalLength() + "px";
    logo[i].style.strokeDashoffset = logo[i].getTotalLength() + "px";
    logo[i].style.animation = `show-line 1s ease forwards ${timeOffset}ms`;
}
