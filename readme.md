## WDI6 General Assembly Atlanta - PROJECT #1

For our first project we were to build an short sample app from one of the following:

- Tic-Tac-Toe or a variant of it (Super-Tic-Tac-Toe, Connect 4)
- Hangman
- Jeopardy

The objectives of this project:

- Practice DOM manipulation using JavaScript/jQuery
- Solidify front-end skills by prototyping and building a site using HTML and CSS
- Practice app deployment, full SDLC

<br>

##PROJECT CORE REQUIREMENTS
Make sure to do all of the following with your app:

* Use HTML, CSS/SASS, JavaScript/jQuery with DOM manipulation
* Must be deployed

<br>




## CHALLENGE ADD-ONS
These are for extra credit! Don't focus on these until you've hit the core requirements.

* Implement multiple games on your site (you can add a RPS if you wish)
* Keep score
* Make it responsive
* Add A.I. (player vs. computer)
* Add avatar choices for the player 
* Add a timer
* Add music while a player makes a choice

<br>

## PLANNING & DELIVERABLES

####Project Plan deliverable's:

![wireframe of game](https://github.com/gokemon/tictactoe/blob/gh-pages/assets/tttWireframe.png)
* Wireframes -- what does the app look like?
* Mock-ups (optional - for example, checkout Mockingbird)
* Stories in Trello -- what do your objectives look like, broken down into unit-sized chunks?
* GitHub -- create a repo for your app and show that you've been committing early and often, while utilizing clear commit messages.
* [Link to Project home](https://github.com/ATL-WDI-Exercises/project-one-requirements)


####Completed Project deliverable's (Due ***Wednesday 4/6/2016***):

* Present your project Wednesday afternoon (around 3pm)
* [Link to Trello Board](https://trello.com/b/3waksLMO/tic-tac-toe)
* [Link to Deployed App](http://gokemon.github.io/tictactoe/)
* [Link to wireframes & mock-ups](https://github.com/gokemon/tictactoe/blob/gh-pages/assets/tttWireframe.png)
* Link to source code on GitHub

<br>


## Testing Logic

![Testing Paths](https://github.com/gokemon/tictactoe/blob/gh-pages/assets/testingPaths.png)
It makes sense to start in the 1st position and test from there. So the **first test** checks the row, the **second test** also starting in the 1st position checks the first column, and the** 3rd test** checks the diagonal check starting in position 1 and going down from there. 

Likewise, the next test would start with the second position and test any open ranges it can that have not already been checked, which is only the middle column. So **test 4** checks position 2. 

The next tests would then check the next position for any open ranges it can that have not already been checked, hence our **5th test** checks position 3 with position 6 and then with with position 9. And then the **6th test** checks diagonal check, going from 3, to 5, and then to 7. 

The **7th test** checks the middle row, of position 4, 5 and 6. And lastly, the **8th tests** the bottom row of position 7, 8 and 9. The result of these tests is that I pop an alert announcing the winner player.

I feel like there might be a better way to do the checking test like *(1 === 2 : 1 === 3)* kind of thing, rather than 

`if ($('#gameBoard').find('#0').text() == $('#gameBoard').find('#1').text()) {`
`           if ($('#gameBoard').find('#0').text() == $('#2').text()) {`
 
which seems like a way to reduce the lines of code by 1 for each of the 8 tests, but as of right now, I haven't figured it out. 

Remembering that position 1 is really index [0] in our array and div id #0. Right now, I am not using the array, but just reading the text of the game cells. 
Later I probably need to learn to use the array, so I can change my tests to read which marker is there. This prevents me from reusing a spot, and to be able to change out markers to images or other icons.


## Things to keep in mind
Make sure that your code is:

* **Well-formatted.** Is this indented well? Can we find the start and end of every div, curly brace, etc?
* **Sufficiently commented.** Will I understand what is going on in each block or function? If it's not clear, are there comments that indicate what you're doing?
* **Clear.** Do my naming conventions make sense? Would another developer be able to look at my app and understand what everything is?
* **Time Management.** Focus on core requirements (minimum viable product) before spending a lot of time on "bells and whistles."

We'll also be looking at:

* **Quality of communication around decision-making.** Can I tell you why I implemented my solution in a certain way? Can I tell you about alternative implementations I might have tried?
* *I thought I wanted to test for winning solutions by array, first row, second row, third row, first column, second column, third column, and the two diagonals. I knew I needed a click event. I knew I needed a counter. I knew I needed to push moves to an array because Marc walked us through the beginning of the "design" of this project*.
* **Ability to pick up new technologies and push self-knowledge.** How did I approach any new libraries/technologies and extend my learning into a working game?


## Contributors

- Marc Wright
- DrMike
- Shawn
- I know there is an approach to software design called Test First, were you design the tests that meet the requirements and then write the code that fits that. And then while researching the game loop, I found this [article](https://lostechies.com/derekgreer/2011/03/28/effective-tests-a-test-first-example-part-1/) from 2011 written for Visual Studio (so no cheating) that really helped me understand the loop and how to test. The trick will be is if I can learn how to apply this concept to future projects. As I worked through this, and had 8 separate tests, I found a way to rethink the tests, which could nest inside of another.


## License

A short snippet describing the [license ](https://en.wikipedia.org/wiki/Free_software#Licensing "license")(MIT, Apache, etc.)
This is *"free", "open source", "public domain" etc, etc, etc* stuff.
I did it for fun and to learn, and hope you have fun playing it as well.
