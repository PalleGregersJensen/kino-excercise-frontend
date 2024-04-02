import { NavLink } from "react-router-dom";

export default function NavHeader() {
    //    const auth = useAuth();

    return (
        <nav className="col-4">
            <div className="d-flex flex-column">
                <NavLink className="mb-0" to="/">
                    Home
                </NavLink>
                <NavLink className="mb-0" to="/cinema">
                    Cinema
                </NavLink>
                <NavLink className="mb-0" to="/theater">
                    Theater
                </NavLink>
                <NavLink className="mb-0" to="/test">
                    Test
                </NavLink>
                <NavLink className="mb-0" to="/movieshow">
                    Movie shows
                </NavLink>
            </div>
        </nav>
    );
}
