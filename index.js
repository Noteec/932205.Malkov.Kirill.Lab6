let buttons = document.querySelectorAll(".butt")
let leftCol = document.querySelector('.left-col');
let rightCol = document.querySelector('.right-col');
let catImg = document.getElementById('cat');
let dogImg = document.getElementById('dog');


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (button.id === "left") {
            leftCol.style.width = "90%";
            rightCol.style.width = "10%";
            catImg.style.display = "block";
            dogImg.style.display = "none";
            catImg.style.width = "600px";
        } else if (button.id === "middle") {
            catImg.style.display = "block";
            dogImg.style.display = "block";
            catImg.style.width = "85%";
            dogImg.style.width = "85%";
            leftCol.style.width = "50%";
            rightCol.style.width = "50%";
        } else if (button.id === "right") {
            leftCol.style.width = "10%";
            rightCol.style.width = "90%";
            dogImg.style.display = "block";
            catImg.style.display = "none";
            dogImg.style.width = "600px";
        } 
    });
});