document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typing-text');
  const paragraphElement = document.getElementById('typing-paragraph');
  const text = "Girls in STEM Club";  // The text to type in h1
  const paragraphText = "We are a club that hopes to inspire the next generation of female innovators! In this club, you will be able to have a fun time collaborating with fellow scholars, learn about opportunities within the world of STEM, be able to branch out and explore your interests, and most importantly, get support from a welcoming community built for girls and women in STEM!"; // The paragraph text
  let charIndex = 0;
  
  // Hide paragraph initially
  paragraphElement.style.opacity = '0';
  paragraphElement.style.transform = 'translateY(20px)';
  paragraphElement.style.transition = 'opacity 1s ease, transform 1s ease';

  function typeText() {
    if (charIndex < text.length) {
      textElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);  // Adjust typing speed here (lower = faster)
    } else {
      // After typing is complete, show the paragraph with animation
      setTimeout(() => {
        paragraphElement.textContent = paragraphText;
        paragraphElement.style.opacity = '1';
        paragraphElement.style.transform = 'translateY(0)';
      }, 500);  // Delay before showing paragraph (adjust as needed)
    }
  }

  // Start the typing animation
  typeText();
});