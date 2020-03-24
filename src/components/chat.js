import * as React from 'react';
import userDetails from '../apis/detailsAPI';
import Heading from './heading';
import socketIOClient from "socket.io-client";
import urls from '../constants/constants';

class Chat extends React.Component {
    chatId;
    state = {
        user: {},
        users: [],
        messages: [],
        chatId: ""
    }
    socket = null;
    constructor(props) {
        super(props);
        if(!userDetails.getUserDetails()) {
            this.props.history.push('/');
            return;
        }
        this.state = {
            user: userDetails.getUserDetails(),
            users: [],
            messages: [],
            chatId: ""
        }
    }
    render() {
        return (<>
        <div className="chat-head">
        <Heading>Anonymous Chat - {this.state.user.name}</Heading>
        <div>Users- {this.state.users.map(user=>(user.name && user.chatId == this.state.chatId) ? (user.name + ",") : "")}</div>
        <div>Chat Link - {window.location.href + "/" + this.state.chatId}</div>
        </div>
            <div className="row chat-container">
                <div className="col-12 chat">
                    {this.state.messages.map(message=>{
                        return <div class={(message._id === this.socket.id ? "mine" : "yours") + " messages"}>
                            <div class="message last">
                            {message.message}
                            </div>
                            <span className="chatee">{message.name}</span>
                        </div>
                    })}
                </div>
            </div>
            <div className="row message-input">
                <div className="col-12">
                    <div className="row">
                        <div className="col-10">
                            <input type="text" value={this.state.chatMessage} name="chatMessage" onChange={this.handleChange} onKeyPress={(e)=>{e.which === 13 && this.sendMessage()}} className="col-12 form-control" placeholder="chatMessage" />
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-primary" onClick={this.sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({[name]:value});
    }

    componentDidMount() {
        if(this.socket == null) {
            this.socket = socketIOClient(urls.socketUrl);
            this.socket.on('connection',()=>{
                console.log("connected");
            })
            this.socket.emit("userDetails", this.state.user);
            this.socket.on("message", data => {
                //this.setState({messages: data});
                if(this.state.chatId == data.chatId) {
                    const messages = JSON.parse(JSON.stringify(this.state.messages));
                    messages.push(data);
                    this.setState({messages});
                }
            });
            this.socket.on("users", (data)=>{
                this.setState({users: data});
                data.map(user=>{
                    if(user._id === this.socket.id) {
                        this.chatId = user.chatId;
                        this.setState({chatId: user.chatId});
                    }
                })
            })
        }
    }

    sendMessage = () => {
        this.socket.emit('chatMessage', {message: this.state.chatMessage, chatId: this.chatId, name: this.state.user.name});
        this.setState({chatMessage: ""});
    }
}

export default Chat;