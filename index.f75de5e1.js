"use strict";
const spider = document.querySelector(".spider");
const wall = document.querySelector(".wall");
const wallSize = wall.getBoundingClientRect(".wall");
// console.log(wallSize);
wall.addEventListener("click", (e)=>{
    const x = e.clientX - wallSize.left;
    const y = e.clientY - wallSize.top;
    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
});

//# sourceMappingURL=index.f75de5e1.js.map
