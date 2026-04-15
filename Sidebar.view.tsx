
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SidebarView = () => {
    const [showMasterDropdown, setShowMasterDropdown] = useState(false);
    const [showPurchaseDropdown, setShowPurchaseDropdown] = useState(false);
    const [showOtherFormsDropdown, setShowOtherFormsDropdown] = useState(false);
    const [showAdminDropdown, setShowAdminDropdown] = useState(false);
    const[showMarketingDropdown,setShowMarketingDropdown]=useState(false);

    const toggleMasterDropdown = () => {
        setShowMasterDropdown(!showMasterDropdown);
        setShowPurchaseDropdown(false);
        setShowOtherFormsDropdown(false);
        setShowAdminDropdown(false);
        setShowMarketingDropdown(false);

    };

    const togglePurchaseDropdown = () => {
        setShowPurchaseDropdown(!showPurchaseDropdown);
        setShowMasterDropdown(false);
        setShowOtherFormsDropdown(false);
        setShowAdminDropdown(false);
        setShowMarketingDropdown(false);
    };

    const toggleOtherFormsDropdown = () => {
        setShowOtherFormsDropdown(!showOtherFormsDropdown);
        setShowMasterDropdown(false);
        setShowPurchaseDropdown(false);
        setShowAdminDropdown(false);
        setShowMarketingDropdown(false);
    };

    const toggleAdminDropdown = () => {
        setShowAdminDropdown(!showAdminDropdown);
        setShowMasterDropdown(false);
        setShowPurchaseDropdown(false);
        setShowOtherFormsDropdown(false);
        setShowMarketingDropdown(false);
    };


    const toggleMarketingDropdown = () => {
        setShowMarketingDropdown(!showMarketingDropdown);
        setShowMasterDropdown(false);
        setShowPurchaseDropdown(false);
        setShowOtherFormsDropdown(false);
        setShowAdminDropdown(false);
    };


    const closeDropdowns = () => {
        setShowMasterDropdown(false);
        setShowPurchaseDropdown(false);
        setShowOtherFormsDropdown(false);
        setShowAdminDropdown(false);
        setShowMarketingDropdown(false);
    };

    return (
        <div className="main-sidebar">
            <section className="sidebar">
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">Main Navigation</li>
                    <li>
                        <Link to="/" onClick={closeDropdowns}>
                            <i className="fa fa-dashboard text-green" /> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={`treeview ${showMasterDropdown ? "menu-open" : ""}`} onClick={toggleMasterDropdown}>
                        <a href="#">
                            <i id = "master" className="fa fa-graduation-cap text-aqua" /> <span id = "master">Master</span>
                            <span className="pull-right-container">
                                <i className={`fa pull-right ${showMasterDropdown ? "fa-angle-down" : "fa-angle-left"}`} />
                            </span>
                        </a>
                        <ul className={`treeview-menu ${showMasterDropdown ? "show" : "hide"}`} onClick={(e) => e.stopPropagation()}>
                            <li><Link to="/Masters/CompanyMaster" onClick={closeDropdowns}><i className="fa fa-industry" />Company Master</Link></li>
                            <li><Link to="/Masters/CompanyMasterJDBC" onClick={closeDropdowns}><i className="fa fa-industry" />Company Master JDBC</Link></li>
                            <li><Link to="/Masters/CompanyMasterJPA" onClick={closeDropdowns}><i className="fa fa-industry" />Company Master JPA</Link></li>
                            <li><Link to="/Masters/MachineMaster" onClick={closeDropdowns}><i className="fa fa-cogs" />Machine Master</Link></li>
                            <li><Link to="/Masters/MachineMasterJDBC" onClick={closeDropdowns}><i className="fa fa-cogs" />Machine Master JDBC</Link></li>
                            <li><Link to="/Masters/MachineMasterJPA" onClick={closeDropdowns}><i className="fa fa-cogs" />Machine Master JPA</Link></li>
                            <li id = "itemmaster"><Link to="/Masters/ItemMaster" onClick={closeDropdowns}><i className="fa fa-italic" />Item Master</Link></li>
                            <li><Link to="/Masters/ItemMasterJDBC" onClick={closeDropdowns}><i className="fa fa-italic" />Item Master JDBC</Link></li>
                            <li><Link to="/Masters/ItemMasterJPA" onClick={closeDropdowns}><i className="fa fa-italic" />Item Master JPA</Link></li>
                            <li><Link to="/Masters/SupplierMaster" onClick={closeDropdowns}><i className="fa fa-support"/>Supplier Master</Link></li>
                            <li><Link to="/Masters/SupplierMasterJDBC" onClick={closeDropdowns}><i className="fa fa-support"/>Supplier Master JDBC</Link></li>
                            <li><Link to="/Masters/SupplierMasterJPA" onClick={closeDropdowns}><i className="fa fa-support"/>Supplier Master JPA</Link></li>

                            <li><Link to="/Masters/CustomerMaster" onClick={closeDropdowns}><i className="fa fa-user"/>Customer Master</Link></li>
                            <li><Link to="/Masters/CustomerMasterJDBC" onClick={closeDropdowns}><i className="fa fa-user"/>Customer Master JDBC</Link></li>
                            <li id = "customermaster"><Link to="/Masters/CustomerMasterJPA" onClick={closeDropdowns}><i className="fa fa-user"/>Customer Master JPA</Link></li>
                            <li><Link to="/Masters/EmployeeMaster" onClick={closeDropdowns}><i className="fa fa-user"/>Employee Master</Link></li>
                            <li><Link to="/Masters/EmployeeMasterJDBC" onClick={closeDropdowns}><i className="fa fa-user"/>Employee Master JDBC</Link></li>
                            <li><Link to="/Masters/EmployeeMasterJPA" onClick={closeDropdowns}><i className="fa fa-user"/>Employee Master JPA</Link></li>
                            <li><Link to="/Masters/MachineVsCheckPointMasterLogic" onClick={closeDropdowns}><i className="fa fa-user"/>MachineVsCheckPoint Master</Link></li>
                            <li><Link to="/Masters/MachineVsCheckPointMasterJDBCLogic" onClick={closeDropdowns}><i className="fa fa-user"/>MachineVsCheckPoint JDBC</Link></li>
                            <li><Link to="/Masters/MachineVsCheckPointMasterJPALogic" onClick={closeDropdowns}><i className="fa fa-user"/>MachineVsCheckPoint JPA</Link></li>
                            <li><Link to="/Masters/SeleniumDemoLogic" onClick={closeDropdowns}><i className="fa fa-user"/>Selenium Demo</Link></li>

                        </ul>
                    </li>
                    
                    
                    <li className={`treeview ${showAdminDropdown ? "menu-open" : ""}`} onClick={toggleAdminDropdown}>
                        <a href="#">
                            <i className="fa fa-graduation-cap text-aqua" /> <span>Admin</span>
                            <span className="pull-right-container">
                                <i className={`fa pull-right ${showAdminDropdown ? "fa-angle-down" : "fa-angle-left"}`} />
                            </span>
                        </a>
                        <ul className={`treeview-menu ${showAdminDropdown ? "show" : "hide"}`} onClick={(e) => e.stopPropagation()}>

                        <li><Link to="/Admin/LoggedInUsers" onClick={closeDropdowns}><i className="fa fa-italic" />Logged In Users </Link></li>
                            <li><Link to="/Admin/LoginUserMaster" onClick={closeDropdowns}><i className="fa fa-italic" />Login User Master</Link></li>
                            <li><Link to="/Admin/LoginUserMasterJDBC" onClick={closeDropdowns}><i className="fa fa-italic" />Login User Master JDBC</Link></li>
                            <li><Link to="/Admin/MenuMaster" onClick={closeDropdowns}><i className="fa fa-industry" />Menu Master</Link></li>
                            <li><Link to="/Admin/MenuMasterJDBC" onClick={closeDropdowns}><i className="fa fa-industry" />Menu Master JDBC</Link></li>
                            <li><Link to="/Admin/SubMenuMaster" onClick={closeDropdowns}><i className="fa fa-cogs" />Sub menu Master</Link></li>
                            <li><Link to="/Admin/SubMenuMasterJDBC" onClick={closeDropdowns}><i className="fa fa-cogs" />Sub menu Master JDBC</Link></li>
                            <li><Link to="/Admin/RoleMaster" onClick={closeDropdowns}><i className="fa fa-support"/>Role Master</Link></li>
                        </ul>
                    </li>

                    
                </ul>
            </section>
        </div>
    );
};

export default SidebarView;


 