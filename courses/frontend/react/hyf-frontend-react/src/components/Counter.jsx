import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment value</button>
            <button onClick={() => setCount(count - 1)}>Decrement value</button>
            <p>{count}</p>
        </>
    );
}
