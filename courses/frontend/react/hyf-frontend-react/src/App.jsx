import { Person } from "./components/person";
import { Button } from "./components/button";
import { DangerButton } from "./components/danger-button";
import { TextInput } from "./components/text-input";
import { ProfileImage } from "./components/profile-image";
import { Card } from "./components/card";
import { Layout } from "./components/Layout";
import { ToggleContent } from "./components/ToggleContent";
import { Counter } from "./components/Counter";
import { Form } from "./components/Form";

function App() {
    return (
        <>
            <Button text="Primary Button" />
            <Card
                title="A man"
                description="This is a description"
                imageUrl="./profile-pic.jpg"
            />
            <Layout>
                <h2>This is a children</h2>
            </Layout>
            <ToggleContent show="true" content="1234" />
            <Counter />
            <Form />
        </>
    );
}

export default App;
