// Listen for scroll events
window.addEventListener('scroll', function() {
  
  // Calculate how far down the page we've scrolled (0 to 1)
  let scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  
  // Calculate where Hooty's head should be
  let maxScroll = window.innerHeight - 80;
  let headPosition = scrollPercent * maxScroll;
  
  // Move Hooty's head
  document.querySelector('.hooty-head').style.top = headPosition + 'px';
  
  // Stretch Hooty's body
  document.querySelector('.hooty-body').style.height = (headPosition+33) + 'px';
});
updateHooty();