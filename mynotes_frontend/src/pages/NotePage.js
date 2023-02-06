import React from 'react'
import { useParams } from 'react-router-dom';

const NotePage = ({match}) => {
    // const noteId = match.params.id 
    const { id } = useParams();

    return (
        <div>Single Note {id}</div>
    )
}

export default NotePage
