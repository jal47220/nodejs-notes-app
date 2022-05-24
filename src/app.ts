import yargs, { demandOption } from 'yargs'

// Add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: { 
            describe: 'Note title',
            demandOption: true
         }
    },
    handler: function (argv) {
        console.log('Adding note', argv);
    }
})

// List command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Listing notes');
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading note');
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing note');
    }
})