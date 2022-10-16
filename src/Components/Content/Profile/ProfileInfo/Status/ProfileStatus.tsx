import React, {FormEvent} from 'react';

type ProfileStatusPropsType =  {
    status: string
    userId: string
    updateStatus: (status: string) => void
}

type LocalStateType = {
    isEditMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, LocalStateType> {
    state: LocalStateType = {
        isEditMode: false,
        status: ''
    }
    activateEditMode = () => {
        if (this.props.userId == '26054') {
            this.setState({isEditMode: true})
        }
    }
    deactivateEditMode = () => {
        this.props.updateStatus(this.state.status)

        this.setState({isEditMode: false})
    }
    onChangeStatusText = (e: FormEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }
    render() {
        return <>
            {!this.state.isEditMode
                ? <h3 onDoubleClick={this.activateEditMode}>{this.props.status === null ? '+++++' : this.props.status}</h3>
                : <input onChange={this.onChangeStatusText} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
            }

        </>
    }
}

export default ProfileStatus;