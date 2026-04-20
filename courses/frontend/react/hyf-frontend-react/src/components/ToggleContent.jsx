export function ToggleContent({ show, content }) {
    return <div>{(show = "true" ? content : `It is false`)}</div>;
}
