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
        status: this.props.status
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
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<LocalStateType>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            {!this.state.isEditMode
                ? <h3 onDoubleClick={this.activateEditMode}>{this.props.status === '' ? '+++++' : this.props.status}</h3>
                : <input onChange={this.onChangeStatusText} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
            }

        </>
    }
}

export default ProfileStatus;