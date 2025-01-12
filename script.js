document.addEventListener("DOMContentLoaded", function() {
  const headerText = "Girls in STEM!";
  const typingElement = document.getElementById("typing-text");
  typingElement.textContent = ""; 
  let index = 0;

  function typeHeader() {
    if (index < headerText.length) {
      typingElement.textContent += headerText.charAt(index);
      index++;
      setTimeout(typeHeader, 150);  
    } else {
      typingElement.style.borderRight = 'none';
      setTimeout(typeParagraph, 1000); 
    }
  }

  const paragraphText = "We are a club that hopes to inspire the next generation of female innovators! In this club, you will be able to have a fun time collaborating with fellow scholars, learn about opportunities within the world of STEM, be able to branch out and explore your interests, and most importantly, get support from a welcoming community built for girls and women in STEM!";
  const typingParagraphElement = document.getElementById("typing-paragraph");
  typingParagraphElement.textContent = "";  

  typingParagraphElement.style.opacity = '0';

  function popUpParagraph() {
    typingParagraphElement.style.opacity = '1';
    typingParagraphElement.textContent = paragraphText;
  }

  setTimeout(popUpParagraph, (headerText.length * 150) + 1000);

  typeHeader(); // Call the typeHeader function to start typing the header text
}); // Closing brace for the DOMContentLoaded event listener function