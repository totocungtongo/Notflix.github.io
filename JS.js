function reveal() {
  var reveals = document.querySelectorAll(".navbar");
  var i = 0;
  for (i; i < reveals.length; i++) {
    if (window.scrollY > 0) {
      reveals[i].classList.remove("nactive");
      reveals[i].classList.add("active");
    } else if (window.scrollY == 0) {
      reveals[i].classList.remove("active");
      reveals[i].classList.add("nactive");
    }
  }
}
window.addEventListener("scroll", reveal);
