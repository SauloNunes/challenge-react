import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WifiIcon from '@material-ui/icons/Wifi';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SpeedIcon from '@material-ui/icons/Speed';

class MachineItem extends Component {
	componentDidMount () {
		this.props.onHandleGetMachine(this.props.match.params.machineId);
	}

	render () {
		return (
			<div>
				{this.props.machine &&
					<form
						id={this.props.machine.id}
						onSubmit={this.props.onHandleMachineUpdate}
						className='Machines-result-container -form'
					>
						<div className='Machine-item'>
							<label className='Machine-item-label'><FavoriteIcon />Name</label>
							<input
								type="text"
								value={this.props.machine.name}
								onChange={this.props.onHandleNameChange}
								className='Machine-item-input'
							/>
						</div>
						<div className='Machine-item'>
							<label className='Machine-item-label'><WifiIcon />Ip Address</label>
							<input
								type="text"
								value={this.props.machine.ip_address}
								onChange={this.props.onHandleIpChange}
								className='Machine-item-input'
							/>
						</div>
						<div className='Machine-item'>
							<label className='Machine-item-label'><SpeedIcon />Health</label>
							<input
								type="text"
								value={this.props.machine.health}
								disabled={true}
								className='Machine-item-input'
							/>
						</div>
						<input type="submit" value="Send" className='Machine-item-send'/>
					</form>
				}
			</div>
		);
	}
}

MachineItem.propTypes ={
	match: PropTypes.any,
	machine: PropTypes.object.isRequired,
	onHandleMachineUpdate: PropTypes.func,
	onHandleGetMachine: PropTypes.func,
	onHandleIpChange: PropTypes.func,
	onHandleNameChange: PropTypes.func
};


export default MachineItem;