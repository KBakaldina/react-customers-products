import React from 'react';

export default function Form(props) {
	const { header, submitText, onSubmit, onChange, close, items, classes } = props;

	return (
		<form onSubmit={(event) => { event.preventDefault(); onSubmit(); close(); }} className={classes.paper} tabIndex={-1}>
			<ul className={classes.bold}>{header}</ul>
			{items.map(({ text, name, value }, index) => <ul key={index}><ListItem text={text} name={name} value={value} onChange={onChange} /></ul>)}
			<ul><input type='submit' value={submitText ?? 'Save'} /></ul>
		</form>
	);
}

function ListItem(props) {
	const { text, name, value, onChange, readOnly } = props;
	return <label>{text}<input type='text' name={name} value={value} onChange={onChange} readOnly={readOnly === true} /></label>
}