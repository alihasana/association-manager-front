import React from "react";

const Field = ({
    name,
    labelClassName,
    label,
    value,
    onChange,
    placeholder = "",
    type = "text",
    error = ""
}) => (
    <>
        <label className={labelClassName} htmlFor={name}>{label}</label>
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder || label}
            name={name}
            id={name}
            className={"form-control" + (error && " is-invalid")}
        />
        {error && <p className="invalid-feedback">{error}</p>}
    </>
);

export default Field;
