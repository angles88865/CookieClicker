var x = 0;

document.getElementById("clicks").innerHTML = "clicks:" + x;
const getClicks = document.querySelector("input");

getClicks.addEventListener("click", (event) => {
    document.getElementById("clicks").innerHTML = "clicks:" + ++x;
});

