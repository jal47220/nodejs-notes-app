import yargs from 'yargs'

// Add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    handler: function () {
        console.log('Adding note');
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