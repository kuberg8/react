import React from 'react';

import {logoutThunkCreator} from '../../redux/auth-reducer.js'
import HeaderAPIComponent from './HeaderAPIComponent.js'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'



let mapStateToProps = (state) => {
    return {
    	isAuth: state.auth.isAuth,
    	login: state.auth.login,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    	logout: () => { dispatch( logoutThunkCreator() ) }
    }
}


//let withUrlDataContainerComponent = withRouter(HeaderAPIComponent)


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIComponent);


export default HeaderContainer;