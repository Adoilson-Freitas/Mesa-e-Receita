import React, {Component} from 'react';

class Header extends Component {

	handleChange(e) {
		// Change title to html of editable elements
		this.props.update({title: e.target.innerText});
	 console.log(this.props.title)
	}

	render() {
		return (
			<header
				className="box__header"
			>
				<h2
				className="box__title"
				contentEditable = {this.props.editable ? true : false}
				onKeyPress = {this.handleChange.bind(this)}
				>
					{this.props.title}
				</h2>
				<i 
					className = "zmdi zmdi-close zmdi-hc-2x pull-right" 
					onClick = {this.props.close}
				/>
			</header>
		);
	}

}

export default Header;