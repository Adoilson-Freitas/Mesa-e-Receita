import React, {Component} from 'react';
		
class TileFooter extends Component {

	render() {
		return (
			<footer className="tile__footer">
				<button className="btn-primary">
					<i className="zmdi zmdi-open-in-new zmdi-hc-lg btn-icon" /> Ver receita
				</button>
			</footer>
		);
	}

}
	
export default TileFooter;