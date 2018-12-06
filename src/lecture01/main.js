var imgs = document.querySelectorAll('img');
var siteWrap = document.querySelector('.site-wrap');

window.addEventListener('scroll', function(event) {
    imgs.forEach(function(img) {
        var slideInAt = window.scrollY + window.innerHeight - img.height / 2;
        var isHalfShown = slideInAt > img.offsetTop + siteWrap.offsetTop;

        if (isHalfShown) {
            img.classList.add('slide-in');
        }
    })
})





window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky ) {
      navbar.classList.add("fixed-navbar")
    } else {
      navbar.classList.remove("fixed-navbar");
    }
  }