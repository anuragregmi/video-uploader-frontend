function checkLogin() {
    var storage = window.localStorage
    var token = storage.getItem('authToken')

    if (!token) {
        // Simulate a mouse click:
        window.location.href = "/login";
    }
}

// check login in all pages
checkLogin()