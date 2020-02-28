/*
  SMOOTH SCROLLING
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => { //Vyberie vsetky hrefy ktore maju # s sebe
  anchor.addEventListener('click', function (e) { //Prida na nich eventlistener
      e.preventDefault(); //Zabrani defalut(aby sa to na to hned prepolo)

      //Urobi samotny scroll
      document.querySelector(this.getAttribute('href')).scrollIntoView({ 
          behavior: 'smooth'
      });
  });
});