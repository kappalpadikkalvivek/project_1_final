window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    // var imageSource1 = "/images/LOGO_WHITE_AFTER.png";
    // var imageSource2 = "/images/LOGO_NYC_CTO.png";

    var image = document.getElementsByClassName("img2");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        image.src = "/images/LOGO_WHITE_AFTER.png";
    } else {
        image.src = "/images/LOGO_NYC_CTO.png";
    }
}
//     // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo

// window.onscroll = function() {scrollFunction()};

    // function scrollFunction() {
    //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         // document.getElementsByTagName("header").style.margin = "auto";
//         // document.getElementsByTagName("header").style.padding = "0px";
//         // document.getElementsByTagName("nav").style.padding  ="0";
//         // document.getElementById("alia").style.padding ="0px ";
// document.getElementsByClassName("img2").style.visibility = "inline";
// document.getElementsByClassName("img1").style.visibility = "none";
//         document.getElementsByClassName("logo").src="/images/LOGO_NYC_CTO.png";
//         // document.getElementById("logo").style.verticalAlign="middle";
//         // document.getElementById("log").style.paddingTop= "20px ";
//         // document.getElementById("logo").style.width = "140px ";
//         // document.getElementById("logo").style.height = "25px ";
        
            // } else {
//         // document.getElementsByTagName("header").style.padding = "0";
//         // document.getElementById("navbar").style.margin  =" 0";
//         // document.getElementsByTagName("nav").style.padding  ="30px 0px 25px  0px";
//         // document.getElementById("alia").style.padding ="10px 0px 20px  0px";
//         // document.getElementById("logo").style.width = "300px";
//         // document.getElementById("logo").style.height = "50px ";
// document.getElementsByClassName("img1").style.visibility = "inline";
// document.getElementsByClassName("img2").style.visibility = "none";
//             // document.getElementsByClassName("logo").src="/images/LOGO_NYC_CTO.png";
//             }
        // }

        // Script for terminal effect texts.
        var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 1;
        this.period = parseInt(period, 8) || 100;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1 );
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 100 - Math.random() * 100;

        if (this.isDeleting) { delta /= 4; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 1000;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
        };

        window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<(elements.length); i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #e1004b }";
        document.body.appendChild(css);
        };
        
const navOpenSlide = () => {
    const menuburger = document.querySelector('.openburger');
    const navactive = document.querySelector('.nav-links');
    
    menuburger.addEventListener("click", () => {
        //Toggle Nav
        navactive.classList.add('nav-open-active');
        navactive.classList.remove('nav-close-active');
        
    });    
}
const navCloseSlide = () => {
    const clsburger = document.querySelector('.closeburger');
    const navclose = document.querySelector('.nav-links');
    
    clsburger.addEventListener("click", () => {
        //Toggle Nav
        navclose.classList.add('nav-close-active');
        navclose.classList.remove('nav-open-active');
    });    
}
    navOpenSlide();
    navCloseSlide();