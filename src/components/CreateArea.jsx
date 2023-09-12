import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    
  const [toExpend,setToExpend]= useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expended(){
     setToExpend(true)
  }

  return (
    <div>
      <form className="create-note">
      {toExpend ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null}
        <textarea
          name="content"
          onClick={expended}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={toExpend ? 3 :1}
        />
        <Zoom in={toExpend}>
        <Fab onClick={submitNote}>
          <NoteAddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
