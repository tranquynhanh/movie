window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('headerFixed').style.transform = "translate(-50%, 0)";
    } else if (document.body.scrollTop <= 200 || document.documentElement.scrollTop <= 200) {
        document.getElementById('headerFixed').style.transform = "translate(-50%, -100%)";
    }
}

new VenoBox({
    selector: ".my-link"
});