let currentFocused = document.querySelector(".focused");
let currentShowed = document.querySelector(".show");
const points = document.querySelectorAll(".point");
points.forEach((point) => {
  point.addEventListener("mouseover", () => {
    console.log("FOCUSED");
    point.classList.add("focused");
    console.log(point);
  });
  point.addEventListener("mouseout", () => {
    console.log(point.classList);
    if (point.classList.contains("unfocused")) {
      point.classList.remove("focused");
      console.log(point);
    }
  });
  point.addEventListener("click", () => {
    if (point.classList.contains("unfocused")) {
      currentFocused.classList.remove("focused");
      currentFocused.classList.add("unfocused");
      point.classList.remove("unfocused");
      point.classList.add("focused");
      currentFocused = point;
      console.log(point);
      if (point.classList.contains("25")) {
        currentShowed.classList.add("noshow");
        currentShowed = document.querySelector(".option25");
        currentShowed.classList.remove("noshow");
      } else if (point.classList.contains("50")) {
        currentShowed.classList.add("noshow");
        currentShowed = document.querySelector(".option50");
        currentShowed.classList.remove("noshow");
      } else if (point.classList.contains("100")) {
        currentShowed.classList.add("noshow");
        currentShowed = document.querySelector(".option100");
        currentShowed.classList.remove("noshow");
      } else if (point.classList.contains("250")) {
        currentShowed.classList.add("noshow");
        currentShowed = document.querySelector(".option250");
        currentShowed.classList.remove("noshow");
      } else if (point.classList.contains("500")) {
        currentShowed.classList.add("noshow");
        currentShowed = document.querySelector(".option500");
        currentShowed.classList.remove("noshow");
      }
    }
  });
});
