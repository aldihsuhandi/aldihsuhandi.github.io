var fg = "#2e3440";
var darkmode = false;
var partic = null;

function switchdarklight()
{
    if(darkmode)
    {
        // switch to light mode
        $(".background").css('background-color', '#eceff4');
        $(".foreground").css('color', '#2e3440');
        fg = "#2e3440";
    }
    else
    {
        // switch to dark mode
        $(".background").css('background-color', '#2e3440');
        $(".foreground").css('color', '#eceff4');
        fg = "#d8dee9";
    }
    darkmode = !darkmode;
    partic.destroy();
    partic = null;
    particleInit();
}

function particleInit()
{
    partic = Particles.init({
        selector: '.bg',
        connectParticles: true,
        color: fg,
        responsive: [
            {
                breakpoint: 768,
                options: {
                    color: fg,
                    maxParticles: 200,
                    connectParticles: false,
                }
            },
            {
                breakpoint: 425,
                options: {
                    maxParticles: 100,
                    connectParticles: true,
                }
            },
            {
                breakpoint: 320,
                options: {
                    maxParticles: 0,
                }
            },
        ],
    });
}

// changing page
var page = ['#home', '#about', '#portfolio'];
var currPage = 0;

function pageInit()
{
    for(var i = 1;i < page.length;i++){
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