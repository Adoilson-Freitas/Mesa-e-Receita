import React, {Component} from 'react';

class AddRecipe extends Component {
	constructor() {
		super();
		this.state = {
			error: false
		}
	}
	handleTitleChange(e) {
		this.setState({title: e.target.value})
	}

	handleImageChange(e) {
		this.setState({img: e.target.value})
	}

	handleIngredientsChange(e) {
		this.setState({ingredients: e.target.value})
	}

	handleInstructionsChange(e) {
		this.setState({instructions: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault();
		if ( !this.state.title || !this.state.ingredients || !this.state.instructions ) {
			this.error();
			return;
		}
		this.props.add(
			this.state.title, 
			this.state.ingredients, 
			this.state.instructions, 
			this.state.img
		)
		this.props.toggleHidden();
	}

	error(){
		this.setState({error: true});
	}

	/* closes form when overlay is clicked
	 */
	handleClick(e) {
		const formBg = document.querySelector(".form-bg");
	    const isClickInside = formBg.contains(e.target);

	    if (!isClickInside) {
	      //the click was outside the specifiedElement, do something
	      this.props.toggleHidden();
	    }
	}

	render() {
		var error;
		if ( this.state.error ) {
			error = 	<span className="text-color-warning">
							Você deve preencher todos os campos marcados como *
						</span>		
		}
		return (
			<div 
				className="form-bg-overlay"
				onClick={this.handleClick.bind(this)}
			>
				<div className="form-bg">
					<form
						className="form"
						onSubmit={this.handleSubmit.bind(this)}
					>
						<i 
							className = "zmdi zmdi-close zmdi-hc-2x pull-right" 
							onClick = {this.props.toggleHidden}
						/>
						<h2 className="form__title">Adicionar Receita</h2>
						<label for="recipeName">Nome da Receita <span>*</span></label>	
						<input
						id = "recipeName"
						type="text"
						onChange={this.handleTitleChange.bind(this)}
						/>
						<label for="recipeName">Ingredientes <span>*</span></label>		
						<textarea
						id = "ingredients"
						onChange={this.handleIngredientsChange.bind(this)}					
						/>
						<label for="ingredients">Instructions <span>*</span></label>
						<textarea
						onChange={this.handleInstructionsChange.bind(this)}					
						/>
						<label for="imageUrl">Imagem URL (optional)</label>	
						<input
						id = "imageUrl"
						type="text"
						onChange={this.handleImageChange.bind(this)}
						/>											
						<input
							type="submit"
							value="Adicionar"
							className="btn-primary"
						/>
						{error}			
					</form>
				</div>
			</div>
		);
	}

}

export default AddRecipe;