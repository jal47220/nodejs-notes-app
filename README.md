# nodejs-notes-app

This repo contains the most basic app created as part of a NodeJS Udemy course.

The intention of this app is to allow adding and removing of objects in a JSON file, listing of object titles, and printing objects to the console by title.

In order to run the app:
-First have npm installed
-Then, you will need to run <code>npm run install</code> to install of the required dependencies in the project folder. 
-Finally, run <code>npm run dev</code> and include any desired parameters.

Parameter examples (Note - the extra '--' is required to use <code>npm run</code> rather than <code>node dist/app.js add (params)</code>):
-<code>npm run dev add -- --title='title' --body='body'</code>. This will add a note to notes.json (in project root) with title 'title' and body 'body'.
-<code>npm run dev remove -- --title='title'</code>. This will remove the note with title 'title' from the notes.json file.
-<code>npm run dev list</code>. This will list the titles of all notes in the notes.json file.
-<code>npm run dev read -- --title='title'</code>. This will print the title and body of the note with title 'title' from notes.json to the console.
