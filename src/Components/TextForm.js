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


	const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }


	const handleCopy = ()=>{
		var text = document.getElementById('mybox')
		text.select();
		text.setSelectionRange(0, 9999);
		navigator.clipboard.writeText(text.value);
		props.showAlert("Copied to Clipboard", "success");
	}


	const handleonchange = (event)=>{
		setText(event.target.value)
}




let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }


	return (
	<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
		<center><h1>{props.heading}</h1></center>
		<div className="mb-3">
		<textarea className="form-control" style={myStyle} value={text} onChange={handleonchange} id="mybox" rows="12" ></textarea>
		</div>
		<button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleUpperClick}>Convert to Uppercase</button>
		<button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handlelowerClick}>Convert to Lowercase</button>
		<button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleclearClick}>Clear text</button>
		<button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
		<button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleCopy}>Copy text</button>
		<br/>
		<br/>
		<h3 style={{color: props.mode==='dark'?'white':'black'}}><u>Your Text Summary</u></h3>
		<p style={{color: props.mode==='dark'?'white':'black'}}>You have Entered {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
	</div>
	)
}

TextForm.propTypes = {
	heading: PropTypes.string.isRequired}