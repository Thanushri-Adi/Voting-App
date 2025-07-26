import React from "react";
import ReactDOM from "react-dom/client";
import VotingApp from "./VoteApp/VotingApp.jsx"; 
import "./VoteApp/Styles.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VotingApp />
  </React.StrictMode>
);