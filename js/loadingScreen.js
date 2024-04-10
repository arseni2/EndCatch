let screen = document.querySelector(".firstScreen")
let page = document.querySelector(".page")

function showFirstScreen() {
    screen.style.display = "flex"
    page.style.display = "none"
}
function hideFirstScreen() {
    screen.style.display = "none"
    page.style.display = "block"
}
function isMobile() {
    const mobileRegExp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegExp.test(navigator.userAgent);
}

if (isMobile()) {
    showFirstScreen()

    setTimeout(() => {
        hideFirstScreen()
    }, 1300)
} else {
    console.log("User is not accessing from a mobile device.");
}