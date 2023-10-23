import { useState } from "react";

function Check (props) {
    const [check, setCheck] = useState(props.default);
    function handleCheck (check) {
        setCheck (check.target.value);
    }
    return (
        <div key={props.indexx}>
            <input type="checkbox" value = {check} onChange = {handleCheck}></input>
    <p>{check}!</p>
        </div>
    );
}

export default Check;