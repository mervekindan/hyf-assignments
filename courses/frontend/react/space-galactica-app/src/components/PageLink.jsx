import { Link } from "react-router-dom";

export function PageLink({ to, title }) {
    return <Link to={to}>{title}</Link>;
}
