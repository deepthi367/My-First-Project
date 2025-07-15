function showInfo(tech) {
  // Hide all info divs first
  document.getElementById("html-info").style.display = "none";
  document.getElementById("css-info").style.display = "none";
  document.getElementById("js-info").style.display = "none";

  // Prepare description text
  let description = "";

  if (tech === "html") {
    description = "HTML is used to structure web pages.";
  } else if (tech === "css") {
    description = "CSS is used to style web pages.";
  } else if (tech === "js") {
    description = "JavaScript adds interactivity to web pages.";
  }

  // Inject into the correct div
  const infoBox = document.getElementById(tech + "-info");
  infoBox.innerText = description;
  infoBox.style.display = "block";
}
