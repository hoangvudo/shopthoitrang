// JavaScript validation for login form
function validateLoginForm() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    
    if (email === "") {
        alert("Vui lòng nhập email hoặc số điện thoại.");
        return false;
    }
    if (password === "") {
        alert("Vui lòng nhập mật khẩu.");
        return false;
    }
    return true;
}

// JavaScript validation for sign-up form
function validateSignUpForm() {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    
    if (name === "") {
        alert("Vui lòng nhập họ và tên.");
        return false;
    }
    if (email === "") {
        alert("Vui lòng nhập email.");
        return false;
    }
    if (password === "") {
        alert("Vui lòng tạo mật khẩu.");
        return false;
    }
    return true;
}