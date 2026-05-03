https://www.greatfrontend.com/questions/user-interface/accordion
import {useState} from "react"

contents= [{key: "HTML", value:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."},
{key: "CSS", value:"Cascading Style Sheets is a style sheet language used for describing the presentation of a docume written in a markup language such as HTML or XML."},
{key: "JavaScript", value:"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."}]



export default function Accordion( ){
  const [openSections, setOpenSections] = useState({})

function handleClick(index) {
setOpenSections(currentSections=> {
  return {...currentSections, [index]: !currentSections[index]}
})
}
  
  
  return (
    <div>
    {contents.map((content, index)=> {
      isOpen= openSections[index];
      return (<div key={index}>
        <button onClick={()=> handleClick(index)} >
          {content.key}{' '}
          <span
            aria-hidden={true}
            className={!isOpen?"accordion-icon": "accordion-icon accordion-icon--rotated"}
          />
        </button>
        {isOpen && <div>
          {content.value}
        </div>}
      </div>)
    })}
    
          </div>
  );
}

