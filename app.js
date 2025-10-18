let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
let forgetPassw = document.getElementById("forgetPassw")

userEmail.addEventListener("change" , () => {
    console.log(userEmail.value);
})

userPassword.addEventListener("change" , () => {
    console.log(userPassword.value);
})

forgetPassw.addEventListener("click" , () => {
    console.log("click");
})

// Icon Handling
changIcon.addEventListener("click" , () => {

    if (changIcon.classList.contains("fa-eye")) {
        changIcon.className = "fa-regular fa-eye-slash absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
        userPassword.type = "password"
    }
    else {
        userPassword.type = "text"
        changIcon.className = "fa-regular fa-eye absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
    }
    
})