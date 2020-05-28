import React, {Component} from 'react';
import './styles.css';

import BoxesContainer from './BoxesContainer';

class Layout extends Component {
  constructor() {
		super();
		this.state = {
			data: []
		};
	}

	render() {
		return (
			<BoxesContainer />
		);
	}

}

export default Layout;