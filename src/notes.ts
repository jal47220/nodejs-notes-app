import fs from 'fs'

type Note = {
    title: string,
    body: string
}

export function addNote (title: string, body: string) {
    const notes = loadNotes();

    const hasDupes = notes.filter(function (note: Note) {
        return note.title === title;
    });
    if (!hasDupes) {
        notes.push({
            title: title,
            body: body
        });
        console.log('Note added.');
    } else { console.log('Note title already exists. Note was not added.'); }
    
    saveNote(notes);
}

export function loadNotes () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) { return []; }
}

export function saveNote (note: Note) {
    const dataJSON = JSON.stringify(note);
    fs.writeFileSync('notes.json', dataJSON);
}