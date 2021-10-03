import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

function SubApp() {
    const [counter, setCounter] = useState(0);
    const handleCounter = (increment) => setCounter(counter + increment);
    return (
        <>
        <Button onClickFunction={handleCounter} increment={1}></Button>
        <Button onClickFunction={handleCounter} increment={2}></Button>
        <Display message={counter} />
        </>
    
    );
}

export default SubApp;