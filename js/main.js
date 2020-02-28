import MoveTo from "moveto";

document.addEventListener('DOMContentLoaded', function(){ 
  const moveTo = new MoveTo();
  const target = document.getElementByClassName('sectionII');
  moveTo.move(target);
});