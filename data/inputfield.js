import React from "react";
import dynamic from "next/dynamic";

const InputField = (props) => {
    const { handleChange, label, name, type, value, className, col } = props;
    
    return (
        <div className={col}>
            <label className="text-light-1 text-14" htmlFor={name}>{label}:</label>
            <input className={className} type={type} onChange={handleChange} value={value} name={name} required/>
        </div>
    )
}

export default dynamic(() => Promise.resolve(InputField), { ssr: false });