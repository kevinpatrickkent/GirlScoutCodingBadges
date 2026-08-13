Girl Scout Coding Badges

Welcome!

This repository contains activities and projects designed to help Girl Scouts learn coding by making things.

We'll start with the basics of JavaScript and then use a game-making library called KAPLAY to create simple games.

You don't need to be an experienced programmer. The goal is to experiment, make things, break things, and figure out how to fix them.

What You'll Learn

As you work through the activities, you'll learn how to:

Write your first computer program
Understand some basic JavaScript
Make things appear on the screen
Make characters move
Respond to keyboard input
Add rules and goals to a game
Add graphics and sounds
Create your own game
Share your game with other people on the internet

Most importantly, you'll learn that coding is something you can learn by trying things out.

Getting Started
What You Need

You'll need:

A computer
A web browser such as Chrome, Edge, Firefox, or Safari
Visual Studio Code
Node.js

You don't need to install KAPLAY separately. The projects in this repository load KAPLAY from the web.

Why JavaScript?

JavaScript is a programming language that runs in web browsers.

That makes it a great language for learning because you can write some code, open a web page, and immediately see what your code does.

Why KAPLAY?

KAPLAY is a JavaScript library designed for making games.

Instead of spending a lot of time building a game engine from scratch, KAPLAY gives us tools for things like:

Creating characters
Drawing shapes
Displaying text
Moving objects
Detecting collisions
Playing sounds
Creating different game scenes

We'll learn these concepts one at a time.

Your First Game

Start with the Hello KAPLAY project:

getting-started/
└── hello-kaplay/

Your first game is intentionally very small:

kaplay();

add([
    text("Hello, KAPLAY!"),
    pos(100, 100),
]);

That's it!

The computer will display the words:

Hello, KAPLAY!

Once that works, start changing the code.

Try changing:

text("Hello, KAPLAY!")

to:

text("Hello, Girl Scouts!")

Then save the file and refresh your browser.

Now you have changed your first game!

Running a Game

The games in this repository run in a web browser.

Because browsers have security rules about loading JavaScript files, we use Node.js to run a small local web server.

You do not need to understand how the server works yet.

From inside a game folder, run:

node server.js

You should see something like:

Game running at http://localhost:8080

Open this address in your browser:

http://localhost:8080

Your game should appear.

Stopping the Game

When you're finished, go back to the terminal and press:

Ctrl + C

This stops the local server.

How to Learn

Don't worry about memorizing everything.

Instead, try this:

1. Run the example

Make sure it works before changing anything.

2. Change something

Change some text, move an object, or try a different number.

3. See what happens

Run the game again.

4. Experiment

Try something you aren't sure will work.

It might!

5. If it breaks, that's okay

Breaking your program is a normal part of programming.

Read the error message, try to figure out what went wrong, and ask for help when you need it.

Projects

Projects will be added here as we work through the coding activities.

Getting Started
Hello KAPLAY — Make your first thing appear on the screen.
Moving Objects — Make something move.
Keyboard Controls — Make a character respond to the player.
Your First Game — Put the pieces together into a playable game.

More projects will be added as we develop the activities.

Making Your Own Game

Eventually, you'll get to make a game of your own.

You might make:

A maze
A platform game
A space game
A puzzle
A racing game
A game about collecting things
Or something completely different

There aren't supposed to be identical answers.

Your game should be yours.

Sharing Your Game

One of the goals of these activities is to eventually publish your game on the internet.

We'll use itch.io to share games.

When you're finished, you'll be able to give someone a link and say:

"I made this game. You can play it here."

That's the goal!

For Adult Leaders

These activities are designed to work with beginners who may have little or no previous programming experience.

The recommended technology is intentionally simple:

HTML
JavaScript
KAPLAY
Node.js
A web browser
Visual Studio Code

We intentionally avoid frameworks and build tools such as React, TypeScript, and Vite in the introductory activities.

The goal is to keep the connection between the code and what the student sees on the screen as clear as possible.

As students progress, additional tools can be introduced when they solve an actual problem or make something easier.

A Note About Mistakes

Programming involves making mistakes.

A lot of them.

That's normal.

If your game doesn't work, you haven't failed. You've discovered something that the computer doesn't understand yet.

Try changing one thing at a time.

Ask questions.

Experiment.

And most importantly:

Have fun making things! 🎮
