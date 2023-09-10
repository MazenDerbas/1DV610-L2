import { WebSiteGenerator } from "./WebSiteGenerator.js";



const webSiteTemplate = new WebSiteGenerator();

const customHeader1 = webSiteTemplate.generateHeader('My Custom Header');
const customHeader2 = webSiteTemplate.generateHeader('My Custom Header');
const customFooter = webSiteTemplate.generateFooter('My Custom Footer')
const customNav = webSiteTemplate.generateNav();

document.body.appendChild(customHeader1);
document.body.appendChild(customHeader2);
document.body.appendChild(customFooter);
document.body.appendChild(customNav);

