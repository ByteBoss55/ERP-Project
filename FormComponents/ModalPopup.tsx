import Button, { ButtonClass, ButtonSize } from "./AddButton";
import React from 'react';

import "./style.css"

interface IModalPopupProps {
    modalTitle: string;
    show: boolean;
    bodyContent: React.ReactNode;
}


// <div className={`modal ${show ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: show ? 'inline-block' : 'none',width: "98vw", height: "97vh" }}>
//         <div className="modal-dialog" role="document" style = {{display: "inline-block", position: "relative", left: "1vw", bottom:"6vh" ,width: "98vw", height: "97vh"}}></div>

const ModalPopup: React.FC<IModalPopupProps> = ({ modalTitle, show, bodyContent }) => {

    return (
        <div className={`modal ${show ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: show ? 'inline-block' : 'none',width: "97vw", height: "98vh" }}>
        <div className="modal-dialog" role="document"  style = {{display: "inline-block", position: "relative", left: "1vw", bottom:"6vh" ,width: "97vw", height: "98vh",overflowY:"auto"}}>
        
          {/* <div className="modal-content"> */}
          <div>
            {/* <div className="modal-header" style={{outline: 'none'}}> */}
            <div className="modal-header">
              <h3 className="modal-title">{modalTitle}</h3>
            </div>
            <div className="modal-body">
              {bodyContent}
            </div>
          </div>
        {/* </div> */}
        </div>
      </div>
    )
}

export default ModalPopup;


