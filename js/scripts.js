
function dropOptionsLeft() {
  document.getElementById("filterDropdownLeft").classList.toggle("show");
}
function dropOptionsRight() {
  document.getElementById("filterDropdownRight").classList.toggle("show");
}

window.onclick = function(event) {

  if (!event.target.matches('.filter-drop_btn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }

  }
}