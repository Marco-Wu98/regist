window.onload = function () {
    var pass = document.getElementById("pass");
    var confirm = document.getElementById("confirm");
    var warn = document.getElementById("warning");
    pass.onclick = function (e) {
        pass.classList.remove("invalid");
        warn.classList.add("hidden");
        var target1 = e.target;
        if (pass.value != "") {
            pass.classList.remove("invalid");
        }
        document.onclick = function (e) {
            var target2 = e.target;
            if (target1 !== target2) {
                if (pass.value == "") {
                    pass.classList.add("invalid");
                    warn.classList.remove("hidden");
                } else {
                    pass.classList.remove("invalid");
                }
            }
        }


    }
    confirm.onkeyup = function () {

        if (confirm.value != pass.value) {
            confirm.classList.remove("valid");
            confirm.classList.add("invalid");
        } else{
            confirm.classList.remove("invalid");
            confirm.classList.add("valid");
        }
    }
}