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
  // scrollProgressElement.children[0].style.maskImage = `linear-gradient(90deg, #000 ${
  //   progress * 100
  // }%, #0000 ${progress * 100}%)`;
  // console.log(scrollProgressElement.children[0].style.mask)
};

// Title

function createWord(parentElement, charArray) {
    for (let i = 0; i < charArray.length; i++) {
      let letter = document.createElement("span");
      letter.innerHTML = charArray[i];
      //   console.log(letter);
      // letter.style.animation = `rotate-letter ${time}ms ease-out forwards ${
      letter.style.animation = `rotate-letter ${time}ms ease-in-out forwards ${
        timeOffset
      }ms`;
      timeOffset += 150
      parentElement.appendChild(letter);
    }}
    
title = document.getElementById("main-title");

word1 = "Welcome!".split("");
// word2 = "my".split("");
// word3 = "name".split("");
// word4 = "is".split("");
// word5 = "Julian".split("");
wordCount = 1
let timeOffset = 0;
let time = 550;

// words = [word1, word2, word3, word4, word5]
words = [word1]

for (let i = 0; i < wordCount; i++) {
  wordContainer = document.createElement('div')
    createWord(wordContainer, words[i])
    // createWord(title.children[i], words[i])
    // timeOffset += 300
    title.appendChild(wordContainer)
    
};
console.log(timeOffset); // 4500

// const arrow = document.getElementById("down-arrow")
// console.log(arrow, arrow.style.animationDelay)
// console.log(arrow.style.animation)
// arrow.style.animation = `arrow-appear 1s ease forwards ${timeOffset + 550}`
// console.log(arrow.style.animation)
console.log(arrow, arrow.style.animationDelay)




window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight)); // 2 raz
}, false);