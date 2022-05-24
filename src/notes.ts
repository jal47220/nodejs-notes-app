import fs from 'fs';
import chalk from 'chalk';

type Note = {
    title: string,
    body: string
}

const greenBg = chalk.bgGreen;
const redBg = chalk.bgRed;
const underlineRed = chalk.underline.red;

export function addNote (title: string, body: string) {
    const notes = loadNotes();

    const duplicates = notes.filter((note: Note) => note.title === title);
    console.log(); // Buffer
    if (duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(greenBg('Note "' + title + '" added.'));
    } else { console.log(redBg('Note titled "' + title + '" already exists. Note was not added.')); }
}
 
export function removeNote (title: string) {
    const notes = loadNotes();

    const removed = notes.filter((note: Note) => {
        if (note.title === title) { notes.pop(title); }
        return note.title === title;
    });
    console.log(); // Buffer
    if (removed.length !== 0) { 
        console.log(greenBg('Removed note titled "' + title + '".')); 
        saveNotes(notes);
    } else { console.log(redBg('Unable to remove note titled "' + title + '"; note does not exist')); }
}

export function listNotes () {
    const notes = loadNotes();

    console.log(); // Buffer
    console.log(underlineRed('Your Notes:'));
    notes.forEach((note: Note) => console.log(note.title));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) { return []; }
}

const saveNotes = (note: Note) => {
    const dataJSON = JSON.stringify(note);
    fs.writeFileSync('notes.json', dataJSON);
}