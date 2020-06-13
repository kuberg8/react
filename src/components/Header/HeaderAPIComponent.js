import React from 'react';

import Header from './Header.js'
import * as axios from 'axios'

import {authAPI} from '../../api/api.js'



class HeaderAPIComponent extends React.Component {
	render() {
	  return (
	    <Header {...this.props} />
	  )
	}
}

export default HeaderAPIComponent