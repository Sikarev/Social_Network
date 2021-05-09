import React from 'react';
import classes from './Textarea.module.css';

const Textarea = React.forwardRef((props, ref) => {
    return (
        <textarea ref={ref} rows={props.rows} cols={props.cols} value={props.value} onChange={props.onChange}>{props.text}</textarea>
    )
});

export default Textarea;