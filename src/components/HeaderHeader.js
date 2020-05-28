import React, {Component} from 'react';

import AddButton from './AddButton';
import AddRecipe from './AddRecipe';

class HeaderHeader extends Component {

	constructor() {
		super();
		this.state = {
			isHidden: true
		};
	}

	toggleHidden() {
		if ( this.state.isHidden ) {
			this.setState({isHidden: false})
		} else {
			this.setState({isHidden: true})			
		}
	}

	render() {
		return (
			<header className="page__header">
				<div className="container flex-container">
						<h1>Mesa e Receita</h1>						
            <AddButton 
							toggleHidden={this.toggleHidden.bind(this)}
						/>					


				</div>
			{!this.state.isHidden && <AddRecipe add={this.props.add} toggleHidden={this.toggleHidden.bind(this)}/>}			
			</header>
		);
	}

}

export default HeaderHeader;






