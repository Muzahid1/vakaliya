window.onscroll = function () {
    scrollFunction()
    navhide()
};
// var navs = document.getElementById("navbar-right")



function scrollFunction() {
    var btn = document.getElementById("home")
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
           btn.style.display = "block"
           document.getElementById("navbar").style.padding = "15px 10px";
           document.getElementById("logo").style.fontSize = "25px";
           document.getElementById("navbar").style.backgroundColor = "rgb(197, 225, 196, 1)";
    } else {
           document.getElementById("navbar").style.padding = "80px 10px";
           document.getElementById("logo").style.fontSize = "35px";
           document.getElementById("navbar").style.backgroundColor = "#95e19147";
           btn.style.display = "none"
    }
}

function nav() {
    console.log("jd");
    var navs = document.getElementById("navbar-right");
    if (navs.style.display == "none") {
           navs.style.display = "block"

    }
    else {
           navs.style.display = "none"
    }
}
  function navhide () {
    var navr =  document.getElementById("navbar-right");
        if (navr.style.display === "block") {
            navr.style.display = "none"
        }
    }

