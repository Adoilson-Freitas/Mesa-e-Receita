import React, {Component} from 'react';
		
class TileHeader extends Component {

	render() {
		return (
			<header
				className="tile__header"
			>
				{this.props.title}
			</header>
		);
	}

}
	
export default TileHeader;