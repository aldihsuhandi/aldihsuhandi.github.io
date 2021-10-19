var fg = "#2e3440";
var darkmode = false;

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
}

function particleInit()
{
    particlesJS.load('bg', 'js/json/particle-js.json', function() {
        console.log('callback - particles.js config loaded');
    });
}

// changing page
var page = ['#home', '#about', '#portfolio'];
var currPage = 0;

function pageInit()
{
    var initPage = 0;
    for(var i = 0;i < page.length;i++){
        if(i == initPage)
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