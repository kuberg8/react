import React from 'react';

import Dialogue_list from './Dialogue_list.js'

import {connect} from 'react-redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect.js'
import {compose} from 'redux'


let mapStateToProps = (state) => {
	return {
		dialoguesData: state.dialogue.dialoguesData,
		isAuth: state.auth.isAuth,

	}
}

let mapDispatchToProps = (dispatch) => {
	return {
	}
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogue_list)

/*
let AuthRedirectComponent = withAuthRedirect(Dialogue_list)


const Dialogue_list_Container = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default Dialogue_list_Container;
*/