import React from "react";
import { useState, useEffect } from "react";

function Tytuł() {
  const [title, setTtile] = useState("");

  useEffect(() => {
      document.title = title || 'Brak';
    },[title]);
  return (
    <div>
      <input type='text' value={title} onChange={(e)=>setTtile(e.target.value)}></input>
    </div>
  );
}
export default Tytuł;
