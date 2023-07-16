import { useState, useEffect } from 'react';
import Note from './components/Note'
import noteService from './services/noteService';

const App = () => {
  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote] = useState('')
  const [ showAll, setShowAll ] = useState(true)


  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')


  const toggleImportanceOf = (id) => {
    console.log(`importance of note ${id} needs to be changed`)
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNotes => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNotes))
      })
  }


  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)


  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        console.log('post response', returnedNote)
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note 
            key={note.id} 
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input
            value={newNote}
            onChange={handleNoteChange}  
          />
          <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App