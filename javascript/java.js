let para1 = document.querySelector(".p1");
let btn = document.querySelector(".b1");
btn.addEventListener("click", function(){
    para1.style.display = "none";
});

let btn1 = document.querySelector(".b2");
btn1.addEventListener("click", function(){
    para1.style.display = "block";
});

let heading = document.createElement("h1");
heading.innerHTML = "welcome";
heading.style.color = "red";
heading.style.fontSize = "50px"
heading.style.textAlign = "center";
document.body.appendChild(heading);


document.body.style.backgroundColor = "blue";

let cbutton = document.createElement("button");
cbutton.innerText = "click me";
document.body.appendChild(cbutton);

cbutton.addEventListener("click",function(){
    heading.style.color = "white";
    document.body.style.backgroundColor = "yellow";
})


