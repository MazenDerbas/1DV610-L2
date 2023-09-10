export class WebSiteGenerator {
    constructor() {

    }

    // Function to generate a header element with a custom name
generateHeader(headerText) {
    const customHeader = document.createElement('header');
    customHeader.innerHTML = `

    <style>
      header{
        text-align: center;
      }
    </style>

    <h1>${headerText}</h1>`
    document.body.appendChild(customHeader);
  } 


  // Function to generate 
generateFooter(footerText) {
  const customFooter = document.createElement('footer');
  customFooter.innerHTML = `<p> &copy; ${new Date().getFullYear()} ${footerText} </p>`; 
  document.body.appendChild(customFooter);
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
  document.body.appendChild(mainContent);
  }

    // Function to generate 
  generateNav(navItems) {

    const customNav = document.createElement('nav')
    const customUl = document.createElement('ul')

    for (const [i,j] of navItems){
      const customLi = document.createElement('li')
      const a = document.createElement('a')
      a.href = j;
      a.textContent = i; 

      customLi.appendChild(a)
      customUl.appendChild(customLi);
    }    

    customNav.appendChild(customUl);

    document.body.appendChild(customNav)

    }

  

  } 


