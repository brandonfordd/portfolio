//Setting up the date and appending to the HTML page
function renderTime() {
  let currentDay = moment();
  $("#currentDay").text(currentDay.format("LTS"));
}
// running renderTime function every 1000 millisecond
setInterval(renderTime,1000);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// function for dark mode button
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {

  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

}
//Event listener for the switch to change themes once false
toggleSwitch.addEventListener('change', switchTheme, false);

//Setting up the date and appending to the HTML page
function renderTime() {
  let currentDay = moment();
  $("#currentDay").text(currentDay.format("LTS"));
}
// running renderTime function every 1000 millisecond
setInterval(renderTime,1000);
