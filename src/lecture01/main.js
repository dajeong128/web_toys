var imgs = document.querySelectorAll('img');
var siteWrap = document.querySelector('.site-wrap');

window.addEventListener('scroll', function (event) {
  imgs.forEach(function (img) {
    var slideInAt = window.scrollY + window.innerHeight - img.height / 2;
    var isHalfShown = slideInAt > img.offsetTop + siteWrap.offsetTop;
    const imgBottom = siteWrap.offsetTop + img.offsetTop + img.height;
    const isNotPassed = window.scrollY < imgBottom;
    if (isHalfShown && isNotPassed) {
      img.classList.add('slide-in');
    } else {
      img.classList.remove('slide-in');
    }
  })
})

window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-navbar");
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  } else {
    console.log('removed..')
    navbar.classList.remove("fixed-navbar");
    document.body.style.paddingTop = 0;
  }
}
