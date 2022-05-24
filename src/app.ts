import yargs from 'yargs';
import * as notes from './notes';

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv: any) => notes.addNote(argv.title, argv.body)
}).command({
    command: 'list',
    describe: 'List notes',
    handler: () => console.log('Listing notes')
}).command({
    command: 'read',
    describe: 'Read a note',
    handler: () => console.log('Reading note')
}).command({
    command: 'remove',
    describe: 'Remove note by title',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv: any) => notes.removeNote(argv.title)
}).parse();