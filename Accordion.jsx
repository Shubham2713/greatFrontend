https://www.greatfrontend.com/questions/user-interface/accordion


import {useState} from "react"

export default function Accordion() {
  const [toggleIndex, setToggleIndex] = useState({})

contents= [{key: "HTML", value:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."},
{key: "CSS", value:"Cascading Style Sheets is a style sheet language used for describing the presentation of a docume written in a markup language such as HTML or XML."},
{key: "JavaScript", value:"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."}]

function handClick(index) {
  setToggleIndex(current=> {
    return {...current, [index]: !current[index]}
  })
}

console.log(toggleIndex)

  return (
     
    <div>
      {contents.map((content, index)=>  { 
        let isOpen= toggleIndex[index]
        return <div key={index}>
        <div >
        <button onClick={()=> handClick(index)}>
          {content.key}
          </button>
          <span
            aria-hidden={true}
            className= {!isOpen? "accordion-icon": "accordion-icon accordion-icon--rotated"}
          />
        </div>
        {isOpen &&<div>
          {content.value}
        </div>}
      </div>})}
      
    </div>
  );
}





import { useState } from "react";

const contents = [
  {
    key: "HTML",
    value:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    key: "CSS",
    value:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    key: "JavaScript",
    value:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export default function Accordion() {
  const [openKey, setOpenKey] = useState(null);

  function handleClick(key) {
    if (openKey === key) {
      setOpenKey(null);
    } else {
      setOpenKey(key);
    }
  }

  return (
    <div>
      {contents.map((content) => (
        <div key={content.key}>
          <button onClick={() => handleClick(content.key)}>
            {content.key} {openKey === content.key ? "▲" : "▼"}
          </button>

          {openKey === content.key && (
            <div>
              {content.value}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
