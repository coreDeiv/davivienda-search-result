
function dropOptions() {
  document.getElementById("filterDropdown").classList.toggle("show");
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