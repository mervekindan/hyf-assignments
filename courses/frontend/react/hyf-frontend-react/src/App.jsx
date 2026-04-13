import { Person } from "./components/person";
import { Button } from "./components/button";
import { DangerButton } from "./components/danger-button";
import { TextInput } from "./components/text-input";
import { ProfileImage } from "./components/profile-image";

function App() {
    return (
        <>
            <Person />
            <Button />
            <DangerButton />
            <TextInput />
            <ProfileImage />
        </>
    );
}

export default App;
