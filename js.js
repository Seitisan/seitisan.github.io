window.onload = function() {
    let skillBars = document.querySelectorAll('.skill-level');
  
    skillBars.forEach(function(bar) {
      let width = 0;
      let targetWidth = bar.style.width;
      bar.style.width = '0';
  
      let interval = setInterval(function() {
        if (width >= parseInt(targetWidth)) {
          clearInterval(interval);
        } else {
          width++;
          bar.style.width = width + '%';
        }
      }, 10);
    });
  };
  