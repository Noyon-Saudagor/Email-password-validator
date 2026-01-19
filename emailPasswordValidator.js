let form = document.querySelector("form");
let email = document.querySelector("#email")
let password = document.querySelector("#password")

form.addEventListener("submit", function (dets){
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if (!emailRegex.test(email.value)){
    document.querySelector("small").style.display = "initial"} else {
        document.querySelector("small").style.display = "none"
    }
if (!passwordRegex.test(password.value)){
    document.querySelector(".rules").style.display = "initial"
} else {
    document.querySelector(".rules").style.display = "none"
}
   
})