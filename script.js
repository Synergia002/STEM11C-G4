
    function toggleSection(sectionId) {
      var steps = document.querySelectorAll('.steps');
    
      steps.forEach(function(step) {
        step.style.display = 'none';
      });
    

      var section = document.getElementById(sectionId);
      if (section) {
        section.style.display = 'block';
      }
    }

function toggleFaq(item) {
    const paragraph = item.querySelector('p');
    item.classList.toggle('active');
    paragraph.style.display = item.classList.contains('active') ? 'block' : 'none';
}