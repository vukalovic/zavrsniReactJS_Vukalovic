import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.user = props.user;
    }

    //renedr usera
    render() {
        return (
            <div style={{marginBottom: 32}}>
                <img src={this.user.avatar_url} />
                <div>
                    <span>NAME: {this.user.name}</span>
                </div>
                <div>
                    <span>LOCATION: {this.user.location}</span>
                </div>
                <div>
                    <span>BIO: {this.user.bio}</span>
                </div>
            </div>
        )
    }
}

export default User;