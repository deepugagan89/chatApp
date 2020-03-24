import * as React from 'react';
import Heading from './heading';
import userDetails from '../apis/detailsAPI';

class Details extends React.Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            chatId: props.match.params.chatId || "",
            newChat: !props.match.params.chatId
        };
    }

    handleChange = (event)=>{
        let {name, value} = event.target;
        this.setState({[name]:value});
    }
    render() {
        return (<>
        <Heading>User Details</Heading>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Enter Name" id="name" name="name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="chatId">Chat ID:</label>
                    <input type="text" value={this.state.chatId} readOnly className="form-control" placeholder="Chat ID" id="chatId"/>
                </div>
                
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" readOnly type="checkbox" name="newChat" checked={this.state.newChat}/> Start New Chat
                    </label>
                </div>
                <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </>);
    }

    handleSubmit = () => {
        userDetails.setUserDetails(this.state);
        this.props.history.push('/chat');
    }
}

export default Details;