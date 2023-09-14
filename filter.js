const liItems = document.querySelectorAll('ul li');

    liItems.forEach(li => {
      li.onclick = function() {
        // Remove the 'active' class from all li elements
        liItems.forEach(item => {
          item.classList.remove('active');
        });
    
        // Add the 'active' class to the clicked li element
        li.classList.add('active');
      }
    });