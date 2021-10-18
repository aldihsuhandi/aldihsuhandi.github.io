window.onload = function() {
    Particles.init({
        selector: '.bg',
        connectParticles: true,
        color: "#2e3440",
        responsive: [
            {
                breakpoint: 768,
                options: {
                    color: "#2e3440",
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
};

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

$(".aboutBtn").click(function() {
    about();
})

$(".homeBtn").click(function() {
    home();
})

pageInit();