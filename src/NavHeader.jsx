import { NavLink } from "react-router-dom";

export default function NavHeader() {
    //    const auth = useAuth();

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/cinema">Cinema</NavLink>
                </li>
                <li>
                    <NavLink to="/theater">Theater</NavLink>
                </li>
                <li>
                    <NavLink to="/test">Test</NavLink>
                </li>
            </ul>
        </nav>
    );
}
