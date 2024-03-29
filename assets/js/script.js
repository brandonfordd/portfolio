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
    $(".theme-text").text("Light mode!")
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    $(".theme-text").text("Dark mode!")
    document.documentElement.setAttribute('data-theme', 'light');
  }

}
//Event listener for the switch to change themes once false
toggleSwitch.addEventListener('change', switchTheme, false);

