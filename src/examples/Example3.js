import { useState } from "react";

function Button3() {
    const [counter, setCounter] = useState(0);
    return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}

export default Button3;