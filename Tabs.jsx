https://www.greatfrontend.com/questions/user-interface/tabs
import { useState } from "react";

const tabs = [
  {
    id: "html",
    label: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: "css",
    label: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.",
  },
  {
    id: "javascript",
    label: "JavaScript",
    content:
      "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              color: activeTab === tab.id ? "blue" : "black",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        <p>{activeTabContent.content}</p>
      </div>
    </div>
  );
}
