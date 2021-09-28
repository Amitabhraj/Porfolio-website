import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

	const [text, setText] = useState('')

	const handleUpperClick = ()=>{
		let new_text= text.toUpperCase();
		setText(new_text);
		props.showAlert("Text Has Converted into Uppercase", "success");
	}


	const handlelowerClick = ()=>{
		let new_text= text.toLowerCase();
		setText(new_text);
		props.showAlert("Text Has Converted into Lowercase", "success");
	}


	const handleclearClick = ()=>{
		let new_text= "";
		setText(new_text);
		props.showAlert("Text Has Cleared", "success");
	}


	const handleCopy = ()=>{
		var text = document.getElementById('mybox')
		text.select();
		text.setSelectionRange(0, 9999);
		navigator.clipboard.writeText(text.value);
		props.showAlert("Text Has Copied", "success");
	}


	const handleonchange = (event)=>{
		setText(event.target.value)
}





	return (
	<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
		<center><h1>{props.heading}</h1></center>
		<div className="mb-3">
		<textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="15" ></textarea>
		</div>
		<button className="btn btn-dark mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
		<button className="btn btn-dark mx-2" onClick={handlelowerClick}>Convert to Lowercase</button>
		<button className="btn btn-dark mx-2" onClick={handleclearClick}>Clear text</button>
		<button className="btn btn-dark mx-2" onClick={handleCopy}>Copy text</button>
		<br/>
		<br/>
		<h3 style={{color: props.mode==='dark'?'white':'black'}}><u>Your Text Summary</u></h3>
		<p style={{color: props.mode==='dark'?'white':'black'}}>You have Entered {text.split(" ").length} words and {text.length} characters</p>
	</div>
	)
}

TextForm.propTypes = {
	heading: PropTypes.string.isRequired}