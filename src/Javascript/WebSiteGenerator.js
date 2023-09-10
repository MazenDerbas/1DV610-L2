export class WebSiteGenerator {
    constructor() {

    }

    // Function to generate a header element with a custom name
generateHeader(headerText) {
    const customHeader = document.createElement('header');
    customHeader.innerHTML = `<h1>${headerText}</h1>`
    return customHeader;
  }


  // Function to generate 
generateFooter(footerText) {
  const customFooter = document.createElement('footer');
  customFooter.innerHTML = `<p> &copy; ${new Date().getFullYear()} ${footerText} </p>`; 
  return customFooter;
  }

  // Function to generate 
generateMainContent(mainTitle, mainText) {
  const mainContent = document.createElement('main');
  const content = document.createElement('div');
  content.innerHTML = `
    <h2>${mainTitle}</h2>
    <p> ${mainText} </p>
    `;

  mainContent.appendChild(content);
  return mainContent;
  }

  generateNav() {
    const customNav = document.createElement('nav')
    const customUl = document.createElement('ul')

    const customLi = document.createEleme
    const a = document.createElement('a')

    customLi.appendChild(a)
    customUl.appendChild(customLi);


    customNav.appendChild(customUl);

    return customNav;
    
    }

    
  } 


