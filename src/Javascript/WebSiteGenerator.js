export class WebSiteGenerator {
    constructor() {

    }

    // Function to generate a header element with a custom name
generateHeader(headerText) {
    const customHeader = document.createElement('header');
    customHeader.innerHTML = `<h1>${headerText}</h1>`
    return customHeader;
  }



generateFooter(footerText) {
  const customFooter = document.createElement('footer');
  customFooter.innerHTML = `<p> &copy; ${new Date().getFullYear()} ${footerText} </p>`; 
  return customFooter;
  }
}