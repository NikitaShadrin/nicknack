## NickNack

This is a responsive portfolio website showcasing my skills as a web developer
Built using Next.js, TypeScript, React and Tailwind

The home page acts as a simple "about me" while other tabs are individual small scale projects that highlight specific features/functionality

### Features

Responsive design with custom fonts, theme, cursor and scrollbar.
The theme preference is saved in local storage, the colors of the cursor and scrollbar correspond to it.

### Tabs

1. Home
Uses the motion animation library for react to provide a smoother transition between the paragraphs.
The page itself provides contact informations and includes information about what drives me as a programmer and as a person.

2. Updates
A more straightforward approach to using motion for a simple fade in of the text. 
This time, because of the uniformity a different approach to structuring the code was taken and instead of wrapping each paragraph 
in a motion div, the tsx content was fragmented. I learned about this approach when I was trying to figure out a way to reduce the redundancy 
of wrapping so many elements in similar motion divs. At first I thought I'd lose the ability to style the text within the paragraphs with this approach but 
using <span> circumvents that easily.

3. Endless Scroll
I was always curious how modern social media achieved enless scrolling for their timelines so I made this simplified version of it. 
In retrospect the implementation is a little clunky and I would like to try rewriting it in the context of a proper application that uses an 
algorithm to serve content to the user.
In this implementation, the "content" is simple cards that have a set heigh, background color, text color and text that are generated within set parameters. It generates some cards on first load and each time the user reaches the end - the tab generates the next set amount of cards.

4. To Do

Each list item has: an id, text and completion status. Upon opening the tab the initial data is retrieved from local storage in case the user already has list items. To avoid altering local storage too early, there are checks in place to make sure the to do has mounted. After the check is passed all the typical CRUD functionality is available. Type in the task into the field, add it, mark it complete or delete it and it will all retain between sessions.


The last tab will soon be a collection of links to other projects.
This site does restrict me in some ways and I want to learn and experiment as much as possible.