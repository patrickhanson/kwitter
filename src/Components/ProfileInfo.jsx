import React, { Component } from "react";
import { Button, Card, Image, Modal, TextArea } from "semantic-ui-react"
import { getUser, deleteUser, patchPassword, patchAbout } from '../Redux/Actions'
import { connect } from "react-redux";


export class ProfileInfo extends Component {
  state = { password: "", about: "", open: false, }

  updatePassword = (event) => {
    if (event.key === 'Enter') {
      this.close()
      this.props.patchPassword(this.state.password)
      this.setState({ password: "" })
    }
  }

  handlePasswordChange = (event) => {

    this.setState({ password: event.target.value })
  }

  updateAbout = (event) => {
    if (event.key === 'Enter') {
      this.close()
      this.props.patchAbout(this.state.about)
    }
  }

  handleAboutChange = (event) => {

    this.setState({ about: event.target.value })
  }

  timeConversion = (messageTime) => {
    let time = new Date(messageTime)
    return time.toDateString()
  }

  showModal = () => {
    this.setState({ open: true })
  }

  close = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (


      <Card fluid>
        <Image src='' />
        <Card.Content>
          <Card.Header>{this.props.displayName}</Card.Header>
          <Card.Meta>
            <span className='date'>Account Created:{this.timeConversion(this.props.createdAt)}</span>
          </Card.Meta>
          <Card.Description>{this.props.about}</Card.Description>
        </Card.Content>
        <Card.Content extra>


        </Card.Content>

        <Modal closeIcon open={open} onClose={this.close} trigger={<Button onClick={this.showModal}>Bio</Button>}>
          <TextArea onChange={this.handleAboutChange} onKeyPress={this.updateAbout} placeholder="Update Bio Information"></TextArea>
        </Modal>



        <Modal closeIcon trigger={<Button>Change Password</Button>}>
          <TextArea onChange={this.handlePasswordChange} onKeyPress={this.updatePassword} placeholder="New Password"></TextArea>
        </Modal>

        <Button onClick={() => this.props.deleteUser()}>Delete Profile</Button>
      </Card>

    )
  }
}


const mapStateToProps = state => {
  return {
    messages: state.messages, profile: state.profile,
    users: state.users
  };
};

function mapDispatchToProps(dispatch) {
  return {

    getUser: () => {
      dispatch(getUser());
    },
    deleteUser: () => {
      dispatch(deleteUser())
    },
    patchPassword: (password) => {
      dispatch(patchPassword(password))
    },
    patchAbout: (password) => {
      dispatch(patchAbout(password))
    }
  }
}



const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfo);
export default Connect;