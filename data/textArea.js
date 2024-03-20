import React from "react";
import dynamic from "next/dynamic";

const TextArea = (props) => {
    const { handleChange, label, name, type, value, className } = props;
    
    return (
        <div className="">
            <label className="text-light-1 text-14" htmlFor={name}>{label}:</label>
            <textarea className={className} rows="3" type={type} onChange={handleChange} value={value} name={name}></textarea>
        </div>
    )
}

export default dynamic(() => Promise.resolve(TextArea), { ssr: false });