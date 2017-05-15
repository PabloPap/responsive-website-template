$(function () {
    "use strict";
    var str,
        i,
        numForSingle,
        numForDouble1,
        numForDouble2,
        mobile,
        blocks,
        size,
        advantCont,
        advantHead,
        headerHeight,
        prefix,
        pop,
        hrefAttr;

    //-------------------
    //flip header images
    //-------------------

    function flipDirection(axis, num) {
        str = ".images" + num.toString();
        if ($(str).hasClass("flipStart" + axis)) {
            $(str).removeClass("flipStart" + axis);
            $(str).addClass("flipEnd" + axis);
        } else {
            $(str).removeClass("flipEnd" + axis);
            $(str).addClass("flipStart" + axis);
        }
    }

    function flip(num) {
        if (num === 1 || num === 2 || num === 4) {
            flipDirection("X", num);
        } else {
            flipDirection("Y", num);
        }
    }

    function update() {
        numForSingle = Math.floor(Math.random() * (6)) + 1;
        flip(numForSingle);
    }

    function secImg() {
        do {
            numForDouble1 = Math.floor(Math.random() * (6)) + 1;
            numForDouble2 = Math.floor(Math.random() * (6)) + 1;
        } while (numForDouble2 === numForSingle || numForDouble1 === numForDouble2);
        flip(numForDouble1);
        flip(numForDouble2);
    }

    function inf() {
        setInterval(update, 2000);
        setInterval(secImg, 10700);
    }

    inf();

    //------------------
    // Mobile Visibility
    //------------------

    $(window).resize(function () {
        mobile = $("#header .container.visible-xs-block:visible");
        blocks = mobile.find(".img");
        size = mobile.width() / 2;
        blocks.css({"width": size, "height": size});
    });
    $(window).trigger("resize");


    //---------
    // Popover
    //---------

    advantCont = ["<ul><li>Etiam orci tellus</li> <li>tincidunt </li> <li>tincidunt</li> <li>Aenean suscipit</li> <li>Aenean suscipit</li> <li>pellentesque</li> <li>pellentesque</li> <li>Phasellus mollis tempor</li> <li>Ι Donec a consectetur</li> <li>Sed ut orci in urna bibendum congue. Sed in tortor enim</li></ul>", "<ul><li>cursus</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li></ul>","<ul><li>cursus</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li></ul>","<ul><li>cursus</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li><li>dapibus suscipit</li></ul>", "<h5>Etiam orci tellus, pharetra ut diam nec, eleifend sodales ante. Donec viverra nulla ut nulla commodo, sed elementum neque auctor. Sed sagittis consequat eleifend. Aliquam elit felis, lacinia ut rutrum dictum, feugiat non augue. Vivamus non nisi ac turpis commodo cursus. Nunc quis dolor eu arcu varius accumsan.</h5>", "<h5>ΜInteger congue lobortis nibh, at condimentum est. Vivamus non libero tempus, ornare libero et, ullamcorper felis. Ut mollis egestas feugiat. Vestibulum libero ex, bibendum ut tempus ut, venenatis quis diam. Curabitur nisl ante, luctus vitae porttitor nec, porta sed odio. Nam tempus sapien feugiat felis blandit iaculis. Curabitur aliquet turpis ac lectus volutpat, vitae rhoncus lectus sollicitudin. Aenean molestie sodales elementum. Nulla accumsan orci velit.</h5>", "<h5>Integer congue lobortis nibh, at condimentum est. Vivamus non libero tempus, ornare libero et, ullamcorper felis. Ut mollis egestas feugiat. Vestibulum libero ex, bibendum ut tempus ut, venenatis quis diam. Curabitur nisl ante, luctus vitae porttitor nec, porta sed odio. Nam tempus sapien feugiat felis blandit iaculis. Curabitur aliquet turpis ac lectus volutpat, vitae rhoncus lectus sollicitudin. Aenean molestie sodales elementum. Nulla accumsan orci velit</h5>"];

    advantHead = ["consectetur adipiscing", "Aliquam volutpat", "pharetra ut diam nec", "Pellentesque habitant morbi tristique", "Pellentesque habitant morbi tristique", "estibulum libero ex, bibendum", "estibulum libero ex, bibendum"];

    for (i = 0; i < advantCont.length; i = i + 1) {
        prefix = 'myPopover';
        pop = document.getElementById(prefix + i);
        $(pop).popover({
            title: '<h4 class="custom-title">' + advantHead[i] + '</h4>',
            content: advantCont[i],
            html: true,
            trigger: "hover"
        });
    }

    //----------------------
    // Fixed Navigation Bar
    //----------------------

    headerHeight = $("header").height();
    $(window).scroll(function () {
        if ($(this).scrollTop() > headerHeight) {
            $("nav").addClass("fixed-nav");
        } else {
            $("nav").removeClass("fixed-nav");
        }
    });

    //----------------------
    // Smooth Scrolling
    //----------------------

    $(".slide").click(function (e) {
        hrefAttr = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(hrefAttr).offset().top
        }, 1000);
        e.preventDefault(e);
    });

    //--------------------------------
    // Hide Hamburger button on click
    //--------------------------------
    $('#navbar').click('li', function () {
        $('#navbar').collapse('hide');
    });
});
