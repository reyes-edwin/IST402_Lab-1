Open package.json and look at the scripts devDependencies and dependencies sections. What do you think each section does here? What commands can you run?

    The scripts section is a list of all the scripts that can be run using 'npm run' in the package. The devDependencies section contains the list of names and versions of modules required for development. The dependencies section is a list of names and versions of modules used by the component. 

The "demo" for your hello-world element is found in index.html. Reading this code, what does it do and how does it work? What HTML is making your script load to show a demo? How is this file rendering HTML via JavaScript?

    The code in index.html defines the structure of the page in the browser. It uses the CSS file saved in the same directory to format the style of the page, such as color, fonts, size, etc. The HTML that loads the script for the demo is   '<script src="/src/HelloWorld.js" type="module"></script>'. The file renders HTML via JavaScript through Lit. The JS file contains the HTML to return. 

The Definition of your element is in your-element-name.js, while the class JS object is found in src/YourElementName.js. Why do you think they put these in two separate files? What do you think each code block is doing in the class'ed object? Leaving comments either in the source via // or in your

    I don't know for sure, but maybe because the class is imported and can be used to define custom elements in the index.html file?

Try to explain what Lit is providing to the repo. What's so special about what Lit is providing that I'd be so bold to say it changes how the web is developed, forever? After anwering these questions to the best of your abilities...

    Lit provides a library of components that can be used to build web components. It's special because Lit components are just standard web components and can be used across any HTML environment in mulitple sites and apps. This interoperability is the game changer. 