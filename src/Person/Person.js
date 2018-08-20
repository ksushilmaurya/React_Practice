import React from 'react';

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}> Hello I am {props.name} and I am {props.age} year old</p>
			<p> {props.children}</p>
			<input type="text" onChange={props.change}/>
		</div>
	)
	
}

export default person;