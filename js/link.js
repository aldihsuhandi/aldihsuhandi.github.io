$(window).ready(function() {
    var linkedin = $("#linkedin");
    var github = $("#github");

    linkedin.click(function() {
        self.open("https://www.linkedin.com/in/aldihsuhandi/");
    });

    github.click(function() {
        self.open("https://github.com/aldihsuhandi");
    });
});