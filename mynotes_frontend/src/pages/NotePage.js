import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


// const NotePage = ({match}) => {
//     let { id } = useParams();

//     return (
    //         <div>
    //             <p>Single Note: {id}</p>
    //         </div>
    //     )
    // }
    
    
const NotePage = () => {
    let { id } = useParams();
    let [note, stateNotes] = useState(null)
    
    useEffect(()=> {
        getNotes()
    }, [])
    
    let getNotes = async () => {
        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json()
        console.log("DATA: ", data)
        stateNotes(data)
        note = data
    } 

    return (
        <div>
        <div>
            <p>
                {note?.body}
            </p>  
        </div>
    </div>
    )
}

export default NotePage
