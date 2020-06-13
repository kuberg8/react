import React, {PureComponent} from 'react';
import st from './status.module.css';


class ProfileStatus extends PureComponent {

	state = {
		editMode: false,
		status: this.props.status
	}


	activateEditMode = () => {
		this.setState( {
			editMode: true,
		})
	/*  this.state.editMode = true;
		this.forceUpdate() - крутая штука перерисовывает state, но его лучше не использовать  */
	}


	deactivateEditMode = () => {
		this.setState( {
			editMode: false,
		})
		this.props.updateStatus(this.state.status)
	}


	onStatusChange = (e) => {
		this.setState({
			status:	e.currentTarget.value
		})
	}


	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status != this.props.status) {
			this.setState({
				status: this.props.status
			})			
		}


		let a = this.state
		let b = this.props
	}


	render() {
		return (
			<div className={st.status}>
				{this.state.editMode 
					?  
					<div className={st.status_editMode}>
						<input 
							autoFocus={true} 
							onBlur={ this.deactivateEditMode } 
							value={this.state.status}
							onChange={this.onStatusChange} />
					</div>
					: 
					<div 
						className={st.status_item} 
						onClick={ this.activateEditMode }>
							{this.state.status}
					</div>
				}
			</div>
		)		
	}
}

export default ProfileStatus;