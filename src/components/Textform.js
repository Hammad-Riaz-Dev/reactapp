import React, { useState } from "react";

export default function Textform(props) {

  const [text, setText] = useState("");
  const readwords = text.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(readwords / 200);
  //  Convert  Upper Case
  const Up_caseClick = () => {
    let Upercase = text.toUpperCase();
    setText(Upercase);
  }
  // Convert Lower Case
  const low_caseClick = () => {
    let Lowercase = text.toLowerCase();
    setText(Lowercase);
  }
  // Clear Text 
  const clear_Click = () => {

    setText('');
  }
   // Copy Text Function
const copyText = () => {
  if (text === '') {
    // If text is empty, show an alert
    alert('Text Box is Empty');
  } else {
    // If text is not empty, proceed to copy
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Text copied to clipboard!');
  }
};

  // Remove Extra Space Function
const removeExtraSpace = () => {
  let trimmedText = text
    .trim()     .replace(/\s+/g, ' ');
  setText(trimmedText); 
};
// Paste Text Function
const pasteText = async () => {
  try {
    // Using the Clipboard API to read text from clipboard
    const clipboardText = await navigator.clipboard.readText();

    if (clipboardText === '') {
      // If clipboard is empty, show alert
      alert('Clipboard is empty');
    } else {
      // If clipboard is not empty, paste the text and show alert
      setText(clipboardText);
      setTimeout(() => {
        alert("Text pasted successfully!");
      }, 100);
    }
  } catch (err) {
    console.error('Failed to read clipboard contents: ', err);
    alert('Failed to paste text from clipboard.');
  }
  
};


  return (
    <div className="mb-3 my-4 p-2 mx-5">
      <label className="form-label">
        <h3>{props.lable}</h3>
      </label>
      <textarea
        className="form-control"
        name={props.name}
        value={text} onChange={(e) => { setText(e.target.value) }}
        id={props.id}
        placeholder={props.placeholder}
        rows={props.row}
      ></textarea>
      <div className="row my-3  text-center">
        <small className=" font-monospace d-block text-end mb-3" >Read Time : {readingTime} min</small>
        <div className="col ">
          <h5>Words<p className="font-monospace">{text.trim().split(/\s+/).filter(Boolean).length}</p></h5>
          <h5>Space<p className="font-monospace">{(text.match(/\s/g) || []).length}</p></h5>
        </div>
        <div className="col">
          <h5>Characters<p className="font-monospace">{text.length}</p></h5>
          <h5>Without Space<p className="font-monospace">{text.replace(/\s/g, '').length}</p></h5>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-start gap-2">
        <button className="btn btn-primary bg-gradient my-3" onClick={Up_caseClick}> Uppercase</button>
        <button className="btn btn-warning  bg-gradient my-3" onClick={low_caseClick}> Lowercase</button>
        <button className="btn btn-danger bg-gradient my-3" onClick={clear_Click}> Clear</button>
        <button className="btn btn-info bg-gradient my-3" onClick={removeExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-success bg-gradient my-3" onClick={copyText}>Copy Text</button>
        <button className={`btn btn-${props.mode === "dark" ? "light" : "dark"} bg-gradient my-3` }onClick={pasteText}>Paste Text</button>


      </div>

    </div>
  );
}
