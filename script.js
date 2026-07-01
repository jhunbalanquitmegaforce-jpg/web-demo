function showform() {
    document.getElementById("myform").style.display = "block";
    document.getElementById("myform").style.position = "fixed";
    document.getElementById("myform").style.top = "50%";
    document.getElementById("myform").style.left = "50%";
    document.getElementById("myform").style.transform = "translate(-50%, -50%)";
    document.getElementById("myform").style.zIndex = "9999";
}
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (username === "admin" && password === "123456") {
        message.style.color = "green";
        message.textContent = "Login successful!";
      alert("Login successful!");
      alert("You can shop now Online!");
      window.location.href = "shop.html";
}else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
}
function closeForm() {
    document.querySelector(".form-container").style.display = "none";
}
const logo = document.getElementById('logo');
logo.addEventListener("click", function() {
    logo.classList.toggle('zoom');  
});

const navbar = document.querySelector(".navbar");
const nav = document.getElementById("navMenu");
const burger=document.getElementById("burger");

window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        nav.style.display = "none";
        burger.style.display = "block";
    } else {
        nav.style.display = "flex";
        burger.style.display = "none";
    }
});
function toggleActive(element){
    element.classList.toggle('active');
    const totalActive = document.querySelectorAll('.list-item.active').length;
    document.getElementById('points-display').innerText = totalActive;
}