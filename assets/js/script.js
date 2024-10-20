document.querySelectorAll('.scroll-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Get the target section's ID from the data-target attribute
      const target = document.querySelector(this.getAttribute('data-target'));
      
      // Use scrollIntoView to scroll to the section smoothly
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Adjust to 'center' or 'end' based on your needs
        });
      }
    });
  });

function toggle_ul(){
    const ul = document.getElementById("nav__ul_div");
    if (!ul.classList.contains("toggled")) {
        ul.classList.add("toggled");
    }
    else{
        ul.classList.remove("toggled");
    }
}