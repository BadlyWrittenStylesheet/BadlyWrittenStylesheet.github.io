// svg

// const logo = document.querySelectorAll("#logo svg");
// const svgs = document.querySelectorAll("#logo")

// const strokeColor = '#111'

// svgs.forEach(svg => {
//   let paths = svg.querySelectorAll("path")

//   const pathArray = Array.from(paths).reverse()

//   pathArray.forEach((path, i) => {
    
//     let timeOffset = (path.length - i - 1) * 300;
//     path.style.strokeDasharray = path.getTotalLength() + "px";
//     path.style.strokeDashoffset = path.getTotalLength() + "px";
//     console.log(path, path.style.animation)
//     path.style += `show-line 1s ease forwards ${timeOffset}ms`;
//     path.style.fill = "red"
//     console.log(path, path.style)
//     path.setAttribute('stroke', strokeColor)

//   })
// });


// Scroll

const scrollProgressElement = document.getElementById("scroll-progress");
// console.log(scrollProgressElement)

scrollProgressElement.children[0].style.webkitMaskImage = `linear-gradient(90deg, #000 0%, #0000 0%)`;

window.onscroll = function () {
  scrollProgress = document.body.scrollY || document.documentElement.scrollTop;
  maxScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  progress = scrollProgress / maxScroll;
  // console.log(scrollProgress, maxScroll, progress)
  // console.log(scrollProgressElement.children)
  // scrollProgressElement.children[0].style.width = `${progress * 100}%`
  scrollProgressElement.children[0].style.webkitMaskImage = `linear-gradient(90deg, #000 ${
    progress * 100
  }%, #0000 ${progress * 100}%)`;
  // console.log(scrollProgressElement.children[0].style.mask)
};

// Title

function createWord(parentElement, charArray) {
    for (let i = 0; i < charArray.length; i++) {
      let letter = document.createElement("span");
      letter.innerHTML = charArray[i];
      //   console.log(letter);
      timeOffset += 150
      letter.style.animation = `rotate-letter ${time}ms ease-out forwards ${
        timeOffset
      }ms`;
      parentElement.appendChild(letter);
    }}
    
title = document.getElementById("main-title");

word1 = "Hello,".split("");
word2 = "my".split("");
word3 = "name".split("");
word4 = "is".split("");
word5 = "Julian".split("");

let timeOffset = 0;
let time = 150;

words = [word1, word2, word3, word4, word5]
for (let i = 0; i < title.children.length; i++) {
    createWord(title.children[i], words[i])
    timeOffset += 300
    
};
console.log(word);


