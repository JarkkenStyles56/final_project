import { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from '../components/NoteForm';
// import ComicBook from '../components/ComicBook';

const Notes = function () {
    const [notes, setNotes] = useState([]);
    // so we can refresh the Page *after* we get a response back from the server on our new note!
    const [refresh, toggleRefresh] = useState(0);
    const refreshParent = () => {
        toggleRefresh(refresh + 1);
    };

    // Notice deps has refresh in there - this way when it increments from someone submitting
    // it calls fetch notes again.
    useEffect(() => {
        fetchNotes();
    }, [refresh]);

    async function fetchNotes() {
        const { data } = await axios.get('/api/notes');
        setNotes(data);
    }
    return (
        <div>
            
            <ol>
                {notes.map(note => {
                    return (
                        <li key={note._id}>
                            <strong>{note.title}</strong> {note.body} <sub>from: {note.user.email}</sub>
                        </li>
                    );
                })}
            </ol>
            <NoteForm didSubmit={refreshParent} />

            {/* <ComicBook /> */}
        </div>
    );
};

export default Notes;