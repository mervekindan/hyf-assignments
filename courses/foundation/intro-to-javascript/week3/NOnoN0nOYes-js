const notes = [];

function saveNote(content, id) {
    notes.push({ content, id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Buy flowers", 3);
saveNote("Repair bicycle", 4);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(
            "The note with id: " +
                notes[i].id +
                ", has the following note text: " +
                notes[i].content
        );
    }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
