const fs = require('fs')
const chalk = require ('chalk')

const getNote = () => {
    return ('return some notes')
}

const addNote = (title, body) => {
    const notes = loadNote()
    
    const duplicateNotes = notes.filter( note => { return note.title === title })

    debugger
   

    if (duplicateNotes.length === 0) {
        notes.push ({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log('new note is made')
    } else {
        console.log('note title already taken')
    }
}

const removeNote = (title) => {
    const notes = loadNote()

    const notesToKeep = notes.filter( note => {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen("Note removed"))
        saveNote(notesToKeep)
    } else {
        console.log(chalk.bgRed("No note found"))
    }  
}

const readNote = (title) => {
    const notes = loadNote() 

    const notesFound = notes.find((note) => note.title === title)

    if (notesFound) {
        console.log(chalk.red.inverse(notesFound.title))
        console.log(notesFound.body)
    } else {
        console.log(chalk.red.inverse('No note is found'))
    }
}


const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json') 
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    } 
}

const listNote = () => {
    console.log(chalk.red('Your notes'))

    const notes  = loadNote()
    notes.forEach(element => {
        console.log(element.title)
    });
}

const saveNote = (notes) => {
    const newJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', newJSON)
}

module.exports = {
    addNote: addNote,
    getNote: getNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote,
}

