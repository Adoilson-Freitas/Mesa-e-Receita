import React, {Component} from 'react';


class TileMain extends Component {

	render() {

		var heroDiv;
		if (this.props.img) {
			heroDiv = <div
					className="tile__hero"
					style={{
						background: "url(" + this.props.img + ")", 
						backgroundSize: "100% auto",
    					backgroundPosition: "center center"	
					}}
				/>
		} else {
			heroDiv = <div 
					className="tile__hero" 
				   />
		}
		return (
			<main
				className="tile__main"
			>
				{heroDiv}
				<header className="tile__header"> 
					<h2 className="tile__title"> {this.props.title} </h2>
				</header>
			</main>
		);
	}

}

export default TileMain;