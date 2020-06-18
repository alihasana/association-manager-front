import React, {useMemo} from "react";
// Import the useDropzone hooks from react-dropzone
import {useDropzone} from "react-dropzone";

const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out"
};

const activeStyle = {
    borderColor: "#2196f3"
};

const acceptStyle = {
    borderColor: "#00e676"
};

const rejectStyle = {
    borderColor: "#ff1744"
};

const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
};

const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: "auto",
    height: 200,
    padding: 4,
    boxSizing: "border-box"
};

const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
};

const img = {
    display: "block",
    width: "auto",
    height: "100%"
};

const getClassName = (className, isActive) => {
    if (!isActive) return className;
    return `${className} ${className}-active`;
};

const Dropzone = ({onDrop, accept, singleOrMultiple}) => {
    // Initializing useDropzone hooks with options
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,} = useDropzone({
        onDrop,
        singleOrMultiple ,
        accept
    });
    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
        }),
        [isDragActive, isDragReject]
    );

    /*
      useDropzone hooks exposes two functions called getRootProps and getInputProps
      and also exposes isDragActive boolean
    */

    return (
        <div className="container">
            <div className={getClassName("dropzone", isDragActive)} {...getRootProps({style})}>
                <input className="dropzone-input" {...getInputProps()} />
                <div className="text-center">
                    {isDragActive ? (
                        <p className="dropzone-content">Release to drop the files here</p>
                    ) : (
                        <p className="dropzone-content">
                            Drag 'n' drop some files here, or click to select files
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dropzone;
