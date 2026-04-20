export function Layout({ children }) {
    return (
        <>
            <header>
                <h1>This is a heading</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>This is a footer</p>
            </footer>
        </>
    );
}
