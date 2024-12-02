document.addEventListener("DOMContentLoaded", function () {
  const kyotoInteractiveMap = document.querySelector("#svg-loct-kyoto-interaction");

  kyotoInteractiveMap.addEventListener("mouseenter", function () {
    kyotoInteractiveMap.style.transition = "transform 1s ease-in-out";
    kyotoInteractiveMap.style.transform = "translateY(-100px) scale(1.5)";
    kyotoInteractiveMap.style.position = "relative";
  });

  kyotoInteractiveMap.addEventListener("mouseleave", function () {
    kyotoInteractiveMap.style.transition = "transform 1s ease-in-out";
    kyotoInteractiveMap.style.transform = "translateY(0) scale(1)";
  });
});
