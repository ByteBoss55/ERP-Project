import React from "react";
import "./style.css"
import { IAuthModal } from "../Utils/interfaces";




interface LoginViewProps {
    onLogoutClick: () => void;
    userDetails: IAuthModal | null;
}




const NavbarView: React.FC<LoginViewProps> = ({onLogoutClick, userDetails}) => {
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

    return (
        <header className="main-header">
            <a href="#" className="logo">
                <span className="logo-mini"><b>EA</b></span>
                <span className="logo-lg"><b>ERP Application</b></span>
            </a>
            <nav className="navbar navbar-static-top" role="navigation">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu" style={{ backgroundColor: 'transparent' }}>
                    <ul className="nav navbar-nav">
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <strong><span className="hidden-xs"> User Name: {userDetails?.user_name}</span></strong><br />
                                <strong><span className="hidden-xs"> Branch: {userDetails?.branch_name} </span></strong>
                                <br />
                                {/* <strong> <span className="hidden-xs"> LogIn Date: {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</span></strong> */}
                                <strong> LogIn Date: <span className="date-time">{date}</span><br />
        Time: <span  style={{ textTransform: 'uppercase' }}>{time}</span></strong>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="" onClick={onLogoutClick}>
                                    <div className="log-out-btn pull-left bg-dander">
                                        Sign Out
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>


    )
}

export default NavbarView;