// "use strict";
// let faqElements = document.querySelectorAll("#faq");
// for (let faqElement of faqElements) {
//   faqElement.addEventListener("click", (event) => {
//     let arrowicon = event.target.nextElementSibling.querySelector(".dropdown");
//     console.log(arrowicon);
//     if (event.target.nextElementSibling.style.maxHeight == 0) {
//       event.target.nextElementSibling.style.maxHeight =
//         event.target.nextElementSibling.scrollHeight + "px";
//       arrowicon.style.transform = "rotateX(180deg)";
//     } else {
//       event.target.nextElementSibling.style.maxHeight = "";
//       arrowicon.style.transform = "rotateX(0deg)";
//     }
//   });
// }

let faqElements = document.querySelectorAll("#faq");
console.log(faqElements);

for (let i of faqElements) {
  i.addEventListener("click", (event) => {
    if (event.target.nextElementSibling.style.maxHeight == 0) {
      event.target.nextElementSibling.style.maxHeight =
        event.target.nextElementSibling.scrollHeight + "px";
    } else {
      event.target.nextElementSibling.style.maxHeight = "";
    }
  });
}

console.log("about page testing");
