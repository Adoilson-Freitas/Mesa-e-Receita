import React, {Component} from 'react';

class BoxFooter extends Component {

	render() {
		return (
			<footer className="box__footer">
        <button
          onClick={this.props.toggleEdit}
        >
          <i className="zmdi zmdi-edit zmdi-hc-lg btn-icon"/> Editar
        </button>        
			</footer>
		);
	}

}

export default BoxFooter;