import { useState } from "react";

function Hello (props) {
    const [name, setName] = useState(props.default);
    function handleNameChange(vards) {
        setName(vards.target.value);
    }
return(
    <div key={props.index}>
        <input value={name} onChange={handleNameChange}></input>
        <p>Hello, {name}!</p>
    </div>
);
}

export default Hello;