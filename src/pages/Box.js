import React, {Component} from 'react';

import Header from '../components/Header';
import Main from './Main';
import BoxFooter from '../components/BoxFooter';

class Box extends Component {

	constructor() {
		super();
		this.state = {
			index: true,
			editable: false,
		}
	}

	deleteRecipe() {
		console.log(this.props)
		this.props.delete(this.props.data.key)
	}	

	/* closes form when overlay is clicked
	 */
	handleClick(e) {
		const formBg = document.querySelector(".box");
	    const isClickInside = formBg.contains(e.target);

	    if (!isClickInside) {
	      //the click was outside the specifiedElement, do something
	      this.props.close();
	    }
	}
	updateRecipe({
					key = this.props.data.key,
					title = this.props.data.title,
					ingredients = this.props.data.ingredients,
					instructions = this.props.data.instructions,
					img = this.props.data.img
				}) {

		this.props.update(key, title, ingredients, instructions, img);
	}

	toggleEdit() {
		console.log("thi")
		this.setState({editable: this.state.editable ? false : true});
	}
	/* Returns box content. Uses if statements to decide if just the title should be shown 
	 * passes editable state to children. If this is true, children become editable
	 */
	render() {
		return (
			<div 
				className="box-bg-overlay"
				onClick={this.handleClick.bind(this)}
			>
				<div className="box">

					<Header
					 	title = {this.props.data.title}
					 	editable = {this.state.editable}
						update= {this.updateRecipe.bind(this)}
						close = {this.props.close}
					/>

					<Main
						ingredients = {this.props.data.ingredients}
						instructions = {this.props.data.instructions}
						img = {this.props.data.img}
						editable = {this.state.editable}
						update= {this.updateRecipe.bind(this)}
					/>

					<BoxFooter
						delete = {this.deleteRecipe.bind(this)}
						toggleEdit = {this.toggleEdit.bind(this)}
					/>

				</div>
			</div>
		);
	}

}


export default Box;