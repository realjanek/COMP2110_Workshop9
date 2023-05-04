
# COMP2110 Week 09

1.	Understand how design and implementation fit together, what is UML and what are sequence diagrams
2.	Explain what a web stack is and describe the most widely used stacks
3.	Understand how to deploy a simple web application to the web

## Task 1: Looking at Responsive Design Guides ** 

Read into the following guidance. 

•	[https://www.toptal.com/designers/mobile-ui/fundamental-guide-mobile-usability](essential)
•	[https://developer.apple.com/design/human-interface-guidelines/designing-for-ios] (optional)
•	[https://m3.material.io/] (optional)

At the same time, take a note in the README.md file in your Github project for Week 9.

•	Design the content based on hotspots for users.
•	Research and observe users with their mobile devices to truly understand how to design for them.
•	Understand the context of mobile usabilitity
•	Make sure key content and navigation is within easy reach of thumbs. Typically single columm on mobile
•	Put the most important content in the center of the screen and place the main navigation controls in the spot that is most appropriate for the device and where fingers don’t block the view of the content.
•	Optimal touch range is 44 pixels
•	Key takeaway: Gestures and interactions make a mobile UI feel more natural for touch, but don’t overdo it.
•	Display only what matters most to users and give them the controls they need to find the rest as they need it.
•	Make sure the most important content is in the center of the screen and place the main navigation controls in the spot that is most appropriate for the device and where fingers don’t block the view of the content.

## Task 2 Looking at Responsive HTML in Use 

Website used: [Amazon.com.au](https://www.amazon.com.au/)
Screenshots of the website on different devices are below:

iPhone

![Amazon landing page on iPhone](/images/Amazon_iPhone.PNG)

iPad

![Amazon landing page on iPad](/images/Amazon_iPad.PNG)
- The website can displayed with different browser sizes and the layout of the page changes depending on the size of the browser.
- Amazon uses an adaptive layout as the layout of it's page changes depending on the device and the page layout. I tested on my iPhone and iPad and the layout was different from my desktop computer.
- All of the content is displayed on the page and the content is displayed in a single column on mobile devices. 
- Amazon doesn't use a hamburger menu for mobile devices, instead it uses a drop down menu for the navigation bar.
- For know your users, Amazon know their users as they focus content on the middle of the screen which allows easy usage of the user's thumbs
- Amazon understands the context of it's users as there are many controls to allow for multiple uses of the website. 
- Amazon follows the rule of thumb by keeping all of it's content in the middle of the screen. 
- Amazon puts their content first as they place all of their ??? in the middle of the screen and all extra features are on the top and bottom of the page. 
- Amazon allows for easy navigation as the navigation bar is at the top of the page and the user can easily access it.
- Amazon uses both a hamburger menu and top bar menu on all device. It looks overcrowded on desktop but it is easy to use on mobile devices.


## Task 3: Responsive Navigation Bar With Flexbox 
I follow the tutorial at [https://www.w3schools.com/howto/howto_js_topnav_responsive.asp](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) to create a responsive navigation bar with flexbox and guides listed in Task 1. With the help of the tutorials, I was able to create a responsive navigation bar with flexbox. It took me more than 2 hours to complete the task being more than in class workshop time.

The focus is on creating Responsive Navigation Bar With Flexbox so it's not a complete website.
Brief summary of work done is below:

- index.html is modified with addition of Font Awesome link <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> in the `<head>` section of your HTML file
- Implemented in the design is a responsive navigation bar with flexbox.
- Font Awesome icons and a hamburger menu for mobile devices are added.
- meda queries are used to change the layout of the navigation bar for mobile devices, tablets and desktops.
- The navigation bar is responsive and changes to a hamburger menu for mobile devices.
- script.js is modified to add a click event listener to the hamburger menu icon.
