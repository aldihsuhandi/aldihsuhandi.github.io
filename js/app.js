$(window).ready(function() {
    var darkmode = false;

    // dark mode
    function switchdarklight()
    {
        if(darkmode)
        {
            // switch to light mode
            $("#switchBtn").html('<i class = "foreground fas fa-sun"></i>');
            $(".background").css('background-color', '#eceff4');
            $(".background-alt").css('background-color', '#e5e9f0');
            $(".foreground").css('color', '#2e3440'); $(".foreground-alt").css('color', '#4c566a');
        }
        else
        {
            // switch to dark mode
            $("#switchBtn").html('<i class = "foreground fas fa-moon"></i>');
            $(".background").css('background-color', '#2e3440');
            $(".background-alt").css('background-color', '#3B4252');
            $(".foreground").css('color', '#eceff4');
            $(".foreground-alt").css('color', '#e5e9f0');
        }
        darkmode = !darkmode;

        destroyParticle();
        particleInit();
    }

    $("#switchBtn").click(switchdarklight);

    // particle 

    function particleInit()
    {
        var dark = "js/json/dark.json"
        var light = "js/json/light.json"

        particleChangeHeight($("#portfolio").height() + $("header").height());

        if(darkmode)
        {
            particlesJS.load('bg', dark, function() {
                console.log('callback - particles.js config loaded');
            });
        }
        else
        {
            particlesJS.load('bg', light, function() {
                console.log('callback - particles.js config loaded');
            });
        }
    }

    function destroyParticle()
    {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window["pJSDom"] = [];
    }

    function particleChangeHeight(height)
    {
        $("#bg").css("height", height);
    }

    // changing page
    var page = ['#home', '#about', '#portfolio'];
    var currPage = 0;

    function pageInit()
    {
        window.scrollTo(0, 0);
        for(var i = 0;i < page.length;i++){
            if(i == currPage)
            {
                continue;
            }

            $(page[i]).hide();
        }

    }

    function hideall()
    {
        for(var i = 0;i < page.length;i++){
            $(page[i]).hide(500);
            // $(page[i]).animate({
            //     'opacity': 0
            // }, 500);
        }

    }

    function home()
    {
        if(currPage == 0)
        {
            return;
        }

        $('body').css("overflow", "hidden");

        window.scrollTo(0, 0);
        hideall();
        $('#home').show(500);
        // $("#home").animate({
        //     'opacity': 1,
        // }, 500);
        currPage = 0;
    }

    function about()
    {
        if(currPage == 1)
        {
            return;
        }

        $('body').css("overflow", "hidden");

        window.scrollTo(0, 0);
        hideall();
        $('#about').show(500);
        // $("#about").animate({
        //     'opacity': 1,
        // }, 500);
        currPage = 1;
    }

    function portfolio()
    {
        if(currPage == 2)
        {
            return;
        }

        $('body').css("overflow", "visible");

        hideall();
        $('#portfolio').show(500);
        // $("#about").animate({
        //     'opacity': 1,
        // }, 500);
        currPage = 2;
    }

    $(".aboutBtn").click(function() {
        about();
    })

    $(".homeBtn").click(function() {
        home();
    })

    $(".portfolioBtn").click(function() {
        portfolio();
    })

    $(".linkedinBtn").click(function() {
        window.open("https://linkedin.com/in/aldihsuhandi");
    })

    $(".githubBtn").click(function() {
        window.open("https://github.com/aldihsuhandi/")
    })

    pageInit();
    particleInit();

    console.log($("#portfolio").height());
})