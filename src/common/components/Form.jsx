import React from 'react';

export default function Form(props) {
	const { header, submitText, onSubmit, close, items, classes } = props;
	const defaultOnChange = () => { return; };
	const onChange = props.onChange ?? defaultOnChange;

	return (
		<form onSubmit={(event) => { event.preventDefault(); onSubmit(); close(); }} className={classes.paper} tabIndex={-1}>
			<ul className={classes.bold}>{header}</ul>
			{items.map(({ text, type, name, value }, index) => <ul key={index}><ListItem text={text} type={type} name={name} value={value} onChange={onChange} /></ul>)}
			<ul><input type='submit' value={submitText ?? 'Save'} /></ul>
		</form>
	);
}

function ListItem(props) {
	const { text, type, name, value, onChange, readOnly } = props;
	return <label>{text}<input type={type ?? 'text'} step={type === 'number' ? 0.01 : undefined} name={name} value={value} onChange={onChange} readOnly={readOnly === true} /></label>
}