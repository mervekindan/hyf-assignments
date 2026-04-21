import { Link } from "react-router-dom";

export function PageLink({ to, title }) {
    return (
        <li>
            <Link to={to}>{title}</Link>
        </li>
    );
}
