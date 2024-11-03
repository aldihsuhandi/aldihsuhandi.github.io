$(window).ready(function() {
    var linkedin = $("#linkedin");
    var github = $("#github");
    var gitlab = $("#gitlab");
    var getsuyoubi_id = $("#getsuyoubi-monday-id");

    linkedin.click(function() {
        self.open("https://www.linkedin.com/in/aldihsuhandi/");
    });

    github.click(function() {
        self.open("https://github.com/aldihsuhandi");
    });

    gitlab.click(function() {
        self.open("https://gitlab.com/Getsuyoubi")
    })


    getsuyoubi_id.click(function() {
        self.open("https://gitlab.com/getsuyoubi1");
    });
});