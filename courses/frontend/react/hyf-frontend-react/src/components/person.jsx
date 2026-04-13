export function Person() {
    const name = "Merve";
    const age = 33;
    return (
        <>
            <p>
                {name} is {age >= 18 ? `an adult` : `a minor`}
            </p>
        </>
    );
}
