import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const NotesListPage = () => {

    // userState will return 2 arrays in we'll destructure them
    let [notes, stateNotes] = useState([])
    useEffect(()=> {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch("http://127.0.0.1:8000/api/notes/")
        let data = await response.json()
        console.log("DATA: ", data)
        stateNotes(data)
    }

  return (
    <div>
        <div className="notes-list">
            {notes.map((note, index) => (
                <h3 key={index}>
                    <ListItem key={index} note={note} />
                </h3>
            ))}
        </div>
    </div>
  )
}

export default NotesListPage
