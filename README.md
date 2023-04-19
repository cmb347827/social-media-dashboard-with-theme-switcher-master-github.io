# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

[screenshot.png](https://postimg.cc/XBK3Qj7h)

### Links

- Solution URL: [Github](https://github.com/cmb347827/social-media-dashboard-with-theme-switcher-master-github.io)
- Live Site URL: [Live Github](https://cmb347827.github.io/social-media-dashboard-with-theme-switcher-master-github.io/)

## My process

### Built with

- Semantic HTML5 markup
- Sass/SCSS
- Bootstrap
- jQuery/Javascript
- Mobile-first workflow


### What I learned

- There were a few challenges during this project. The first one was to get the background colors right , with the different top header and bottom header.
  I finally figured out how to do this with the :before and :after pseudo elements
- I also wanted to added the up/down carets , dynamically, rather than hard-code them in using font-awesome. I first tried mixing Javascript and Jquery to do this, by using the Jquery addClass and that didn't go well.
  When I tried to solve it using just Javascript it was straightforward.
- At first I had used the Bootstrap toggle switch class .form-switch , to create the toggle button. But once I had added the color theme switcher and had added the background gradients, the 
  toggle button slider itself was hard to see. I tried overriding the colors by googling how to do this, but it didn't seem to work.
  Finally I decided to go with a CSS coded toggle button instead and then overriding the colors, with the color theme switches, were easy.
- The top-border colors were easy, except for the instagram one which uses a linear-gradient. I could not do this by simply adding the gradient to the background of the .card and giving it 3px height.
  Because then the card would not correctly hightlight on `.hover` (with a different third hsl color depending on .dark or .light):
  
  `div:first-of-type .card:nth-of-type(3){
         `display: inline-block;
         `width: 100%;
         `height: 3px;
	     `background: linear-gradient(hsl(37, 97%, 70%) , hsl(329, 70%, 58%)) hsl(227, 47%, 96%) no-repeat;
		 `background-size: 100% 3px;
  `}
   `
   
  I added the .top-border-gradient class div, changed the code around a bit and then it worked. Though not perfect, as the corners are not rounded. I know off course it should be done with 
  `border-top-color: hsl(329,79%,38%)` but then it's not possible with the linear gradient. I could not figure out how to do this with a linear-gradient.
  

### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascript, Bootstrap, Sass/SCSS. For now, in time I will go re-learn React ect.

### Useful resources

- [The top background ](https://stackoverflow.com/questions/28565976/css-how-to-overflow-from-div-to-full-width-of-screen) 
- [triangle carets](https://www.tutorialrepublic.com/faq/how-to-create-triangle-or-caret-icons-using-css.php)
- [coloring the instagram icon](https://www.geeksforgeeks.org/how-to-create-linear-gradient-text-using-html-and-css/)
- [createAttribute](https://www.w3schools.com/jsref/met_document_createattribute.asp)

## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)

