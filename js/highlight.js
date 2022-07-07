class Section {
    constructor(name) {
        this.name = name;
        this.id = "#" + name;
        this.nav = "#" + name + "Nav";
        this.object = $(this.id);
        this.height = 0;
    }
}


function hightlightNav(sections, currHeight) {
    console.log(currHeight);
    sections.forEach(section => {
        var objectHeight = section.object.height();
    });
}

function build() 
{
    var sections = [];
    var totalHeight = 0;
    $("section").each(function() {
        var id = $(this).attr('id');
        var section = new Section(id);

        if(id != "home") {
            section.height = totalHeight;
            sections.push(section)
        }

        totalHeight += section.object.height();
    });

    console.log(sections);
    return sections;
}

$(window).ready(function() {
    var sections = build();

    sections.forEach(element => {
        console.log(element.height);
    });

    $(document).on('scroll', function() {
        var currHeight = $(window).scrollTop();
        hightlightNav(sections, currHeight);
    });
});