import React, { useState } from "react";

function CreateArea(props) {

const [text , setText] = useState({
  title:"",
  content:""
});

function handleChange(event){
  const {name , value} = event.target;
  setText(prevText => {
    return{
      ...prevText,
       [name]: value
    };
  });
}

function clicked(event){
  props.onAdd(text);
  setText({
    title:"",
    content:""
  });
  event.preventDefault();
}

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={text.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={text.content}
          placeholder="Take a note..."
          rows="3" 
/>
        <button onClick={clicked}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;