import React from 'react'

const NotePage = ({match}) => {
    let noteId = match.params.id 

    return (
        <div>Single Note {noteId}</div>
    )
}

export default NotePage