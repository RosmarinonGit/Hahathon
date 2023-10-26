const main = document.querySelectorAll('.main');
const check = document.querySelector("#no-bg");

window.onload = function() {
  if (check) {
    document.getElementsByClassName('main')[0].style.backgroundImage = "none";
    document.getElementsByClassName('info-block')[0].style.justifyContent = "center";
  } 
}
function redirectToTeamPage() {
  var select = document.getElementById("team-select");
  var selectedValue = select.options[select.selectedIndex].value;

  if (selectedValue === "team_1") {
      window.location.href = "./party.html";
  } else {
      window.location.href = "./404.html";
  }
}
