import React from "react";

const Footer: () => JSX.Element = () => {
    return (
        <footer className="main-footer">
            {/* To the right */}
            <div className="pull-right hidden-xs">
                Developed by NextGen SoftTech, Pune
            </div>
            {/* Default to the left */}
            <strong>Copyright © 2017 <a href="http://erp.spidosoft.com" target="_blank">ERP Application</a>.</strong> All rights reserved.
        </footer>

    )
}

export default Footer;