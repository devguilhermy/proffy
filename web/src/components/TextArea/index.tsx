import React, {TextareaHTMLAttributes} from "react";

import "./styles.css";


interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string,
    label: string
}

// const Input: React.FC<InputProps> = (props) => {

function TextArea({ name, label, ...rest }: TextAreaProps) {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    )
}

export default TextArea;