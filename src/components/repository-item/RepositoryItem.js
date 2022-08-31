import React from "react";

class RepositoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.repo = props.repo;
    }
    //render pojedinog repozitorija 
    render() {
        return (
            <div style={{marginBottom: 24}}>
                {this.repo && (
                    <a href={this.repo.html_url} target="_blank">
                        <div>
                            <span>Repostiory ID: {this.repo.id}</span>
                        </div>
                        <div>
                            <span>Repostiory Name: {this.repo.name}</span>
                        </div>
                    </a>
                )}
            </div>
        );
    }
}

export default RepositoryItem;