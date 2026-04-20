import { useState } from "react";

export function Form() {
    const [petName, setPetName] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (event) => {};

    // const handleChange = (event) => {
    //     event.target.value;
    // };

    return (
        <form onSubmit>
            <label>Which pet?</label>
            <input
                text="Pet name"
                value={petName}
                onChange={(event) => setPetName(event.target.value)}
            />
            <br />
            <label>What is your name?</label>
            <input
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
