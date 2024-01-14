function showPassword() {
    var passwordinput = document.getElementById("password");
    if (passwordinput.type === "password") {
        passwordinput.type = "text";
    }
    else{passwordinput.type = "password";}
}