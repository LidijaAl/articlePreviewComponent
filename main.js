let btn1 = document.getElementById("share1");
let btn2 = document.getElementById("share2");
let authorMain = document.getElementById("authorMain");
let authorAdd = document.getElementById("authorAdd");
let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 475;



if (w > targetWidth) {
    btn1.addEventListener("click", function () {
        if (authorAdd.style.display === "none") {
            authorAdd.style.display = "block";
            authorMain.style.display = "";
        } else {
            authorAdd.style.display = "none";
        }
    })
}else {
    btn1.addEventListener("click", function () {
        authorMain.style.display = "none";
       authorAdd.style.display = "block";
    });

    btn2.addEventListener("click", function () {
            authorAdd.style.display = "none";
            authorMain.style.display = "";
    });
}