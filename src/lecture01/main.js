var imgs = document.querySelectorAll('img');
var siteWrap = document.querySelector('.site-wrap');

window.addEventListener('scroll', function (event) {
  imgs.forEach(function (img, index) {
    var slideInAt = window.scrollY + window.innerHeight - img.height / 2;
    var isHalfShown = slideInAt > img.offsetTop + siteWrap.offsetTop;

    if (isHalfShown) {
      img.classList.add('slide-in');
    }
  })
})