function checkLogin() {
    var storage = window.localStorage
    var token = storage.getItem('authToken')

    if (!token) {
        // Simulate a mouse click:
        window.location.href = "/login";
    } else {
        var login_link = document.querySelector("#login-link")
        login_link.innerHTML = "Logout"
        login_link.setAttribute("href", "javascript: window.localStorage.clear(); window.location.reload()")
    }
}

// check login in all pages
checkLogin()