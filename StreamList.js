import React, { useState } from "react";

function StreamList() {
    const [list, setList] = useState([]);
    const [input, setInput] = useStae("");

    const handleAdd = () => {
        if (input) {
            setList([...list, input]);
            setInput("");
        }
    };

    return {
        <div>
        <h1>StreamList<h1>
        <inputtype="text"
        value={input}
        onChange={(e) =>
    setInput(e.target.value)}
            placeholder="Add a movie or show"
            />
            <button onClick=handleAdd}>Add</ button>
            <ul>
                {list.map((item, ibdex) => (
                    >li key={index}>{item}</li>
                ))}
                </ul>
            </div>
         );
}

export default StreamList; 