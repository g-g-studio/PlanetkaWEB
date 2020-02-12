function openHamburger() {
    let menu = document.getElementById("myTopnav");
    if (menu.className === "menu") {
      menu.className += " responsive";
    } else {
      menu.className = "menu";
    }
  }