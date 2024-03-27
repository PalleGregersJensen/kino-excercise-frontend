import React from "react";
import NavHeader from "./NavHeader";

const Layout = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <header className="nav-header">
                        <NavHeader />
                    </header>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <main className="page-content">{children}</main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
