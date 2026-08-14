***************************************************************************************************************

Badge Requirements:

1. Learn about functions and arguments

    For step 1 since we are working primarily in javascript - reccomend you start here:         https://www.freecodecamp.org/learn/javascript-v9/

2. Explore how memes are created

    Memes are pictures with words on them.   Here is a website for generating memes: https://imgflip.com/memegenerator
    Be careful there are of course memes with inappropriate content.

3. Write pseudocode for a meme

    Simple example pseudocode:
       Display Background -> Display thoughtful sprite -> Use variables to define spacing of buttons, textboxes, and text -> Display buttons -> Display textboxes -> Display text in boxes

4. Write shareable code

    In the example section the main.js files for making an example meme are shown.  Shareable code is clearly written, witch comments where necessary to explain complex parts.

5. Share your meme

    In order to complete this one we chose uploading to itch.io as a comic (example: https://kevinpatrickkent.itch.io/procrastinate)
    You could also share with someone else outside girls scouts (i.e. text, email to friend/family/etc..)

When I’ve earned this badge, I’ll know the basics of computer coding and how to create a
meme that can have an impact on other people, my community, and the world.

*******************************************************************************************************************

Steps for completing Step 4:

    1) Install Node.js: https://nodejs.org/en/download
        At the time I installed this there was a checkbox asking whether or not you wanted to install other programs including 
        chocalotey - you do not need those for this setup.
        
    2) Text file editor.  Notepad works well and it's probably already on your computer.
    
    3) Download the files in the CodingBasics folder above:
        You need to place index.html, main.js, and server.js into a folder named something like my-game on your computer 
        (Documents folder great choice)

    4) Open a terminal in the folder where you stored those file.
        There are many ways to do this - here is one.  Go to the folder where you stored the files, and then type 'cmd' in the 
        address bar and then hit enter. A terminal should open to allow you to enter commands.

    5) Enter the following command: node server.js
        You should see something like this printed out in the terminal: Game running at http://localhost:8080

    6) Copy and paste the http address from step 5 into the address bar of your browser.  When you load the browser you should 
        see a checkered background with 'Hello, KAPLAY!' displayed. Congrats that is your first run of a javascript program!

    7) Now go back to the folder where the files are stored, right click on the main.js file, and open with notepad, notepad++, 
        or whichever text editor you are using. You can now edit the commands, save the file, and then reload the 
        http:localhost:8080 webpage to see what happens. Remember change stuff and break things - you can always download these 
        files again.
        Leading questions:
            What does the add command do?  
            How about the parts inside of the add command? 
            What does the pos(80,200) setting do?

    8) In order to make the meme we are going to need some more commands.  Here are some additional commands to type in and try:
    
        setBackground(0,0,0); //try this and see what happens
        
        loadBean() //put these two in together
        add([sprite("bean"), pos(80,300), scale(3), color(0, 255, 0)]);

        When you enter these commands they should be after the kaplay() line and then either before or after the add(...) command

        Example:

            kaplay()  //already in the code
            
            setBackground(0,0,0); //try this and see what happens
            
            loadBean(); //put these two in together
            add([sprite("bean"), pos(80,300), scale(3), color(0, 255, 0)]);

            add([  //already in the code
                text("Hello, KAPLAY!"),
                pos(100,100)
            ]);

    9) After you get done playing around with those you can load sprites of your choice.  The loadBean() is a special preloaded
        sprite that comes in the KAPLAY package.  To load other sprites you need to first download them, and then load them.
            a) Go here to see many KAPLAY sprites ready for you to use: https://kaplayjs.com/crew/
            b) Download the ones you want and put them in the same folder as your scripts.
            c) Use this command to load them: loadSprite("been", "been.png");
                "been.png" should be the name of your sprite you downloaded.
            d) The command above is the same as the loadBean() command above, use the command along with the add command.
                add([sprite("been"), pos(20,20)]); // this would actually add the 'been.png' sprite.

    10) At this point you are ready to play around and make your memes.  Use the sprites from kaplay or make your own!
        If you look in the examples folder you can see the example I used to make the example meme above.
        Note that I used variables to define spacing, and this was helpful in getting things adjusted as well as
        being a good way to get used to using variables.

    11) For the sharing step you can upload on itch.io
        Store the whole folder with your sprites and the code files (html and js) in a zip file
        Upload to itch.io as a comic since it doesn't have any interaction.

    12) I would be happy to add your examples and links to your work here in GitHub for others.  Please let me know!


Notes on Node.js:
    This is used so that you can make a local server to display your webpage with your javascript game embedded.  You will need this 
    to start the local server, and then you will be able to view the changes you make in your javascript code on the webpage.

Notes on the Text Editor:
    For what we are doing, Notepad++ will make the coding blocks easier to see, and VSCode will make things even easier.  Sometimes 
    starting with notepad is nice so that people can learn that many complex programs are managed by simple text files.  You can always 
    get a more complex text file editor later.

Notes on KAPLAY:
    I chose this platform with making a game for the coding badge in mind.  Kaplay has resources set up to make game making an easier 
    step so we're starting there.  The walkthrough for a first game here was useful: https://kaplayjs.com/docs/guides/creating_your_first_game/

