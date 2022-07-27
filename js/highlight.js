class Section {
    constructor(name) {
        this.name = name;
        this.id = "#" + name;
        this.nav = "#" + name + "Nav";
        this.object = $(this.id);
        this.height = 0;
        this.underline = false;
    }
}

function hightlightNav(sections, currHeight) {
    sections.forEach((section) => {
        var currId = section.id;
        var currNav = section.nav;
        var objectHeight = section.object.height();
        if (
            section.height <= currHeight &&
            section.height + objectHeight > currHeight
        ) {
            if (section.underline == false) {
                $(currNav).fadeIn(1000, function () {
                    $(currNav).css("text-decoration", "underline");
                });
                section.underline = true;
            }

            sections.forEach((e) => {
                if (currId != e.id && e.underline == true) {
                    var nav = e.nav;
                    $(nav).css("text-decoration", "none");
                    e.underline = false;
                }
            });
        }
    });
}

function build() {
    var sections = [];
    var totalHeight = 0;
    $("section").each(function () {
        var id = $(this).attr("id");
        var section = new Section(id);

        if (id != "home") {
            section.height = totalHeight;
        }
        sections.push(section);

        totalHeight += section.object.height();
    });

    console.log(sections);
    return sections;
}

$(window).ready(function () {
    var sections = build();

    sections.forEach((element) => {
        console.log(element.height);
    });

    $(document).on("scroll", function () {
        var currHeight = $(window).scrollTop();
        hightlightNav(sections, currHeight);
    });
});
