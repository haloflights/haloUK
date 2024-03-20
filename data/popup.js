
import React from "react";
import dynamic from "next/dynamic";

const Popup = props => {

    return(
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={props.handleClose}></button>
                {props.content}
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Popup), { ssr: false });