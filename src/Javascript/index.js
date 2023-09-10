import { WebSiteGenerator } from "./WebSiteGenerator.js";



const webSiteTemplate = new WebSiteGenerator();

const customHeader1 = webSiteTemplate.generateHeader('My Custom Header');
const customHeader2 = webSiteTemplate.generateHeader('My Custom Header');
const customFooter = webSiteTemplate.generateFooter('My Custom Footer')


const navItems = [
    ['Home', './index.html'],
    ['About', './about.html'],
    ['Contact', './contact.html']
  ];

const customNav = webSiteTemplate.generateNav(navItems);

const customMaincontent = webSiteTemplate.generateMainContent('This is main content ','Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, rerum iure quisquam quaerat at maxime facilis perspiciatis accusantium asperiores laudantium repellendus vitae doloremque harum maiores unde tempora reiciendis excepturi. Optio.')




