import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Profile from "./Profile";
import {
  login,
  register,
  like,
  newPost,
  deleteMessage,
  getMessages,
  getMessageID,
  getLogout,
  getUser
} from "../Redux/Actions";
import Message from "./Message";
import NavBar from "./NavBar";
import { Login, Register, Auth } from "./Login";
import {
  Container,
  Header,
  List,
  Sticky,
  Modal,
  Button,
  Grid,
  Card,
  Divider
} from "semantic-ui-react";

class Main extends Component {
  render() {
    return (
      <Container>
        <div className="App">
        <Container className='headerNav' style={{marginBottom: '2vh'}}>
          <CustomHeader />
          <Sticky>
            <NavBar />
          </Sticky>
          </Container>
          <Grid centered>
            <Grid.Row columns={3}>
              <Grid.Column width={4}>
                <Card centered>
                  <Profile />
                </Card>
              </Grid.Column>

              <Grid.Column centered width={9}>
                <Container className="register" textAlign={"center"}>
                  
                    <Message
                      getMessages={this.props.getMessages}
                      getMessageID={this.props.getMessageID}
                      user={this.props.getUser}
                      onClick={this.props.post}
                    />
                 
                    <Message
                      getMessages={this.props.getMessages}
                      getMessageID={this.props.getMessageID}
                      user={this.props.getUser}
                    />
                
                    <Message
                      getMessages={this.props.getMessages}
                      getMessageID={this.props.getMessageID}
                      user={this.props.getUser}
                    />
                  
                </Container>
              </Grid.Column>
              <Grid.Column width={3}>
                <CustomFooter />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default Main;
