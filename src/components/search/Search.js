import React from "react";
import User from "../user/User"
import RepositoryItem from "../repository-item/RepositoryItem";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            repos: [],
            user: null,
        };
    }

    //render metoda koja renderira user komponentu i po jednom repozitori item za svaki repozitori koji user ima 
    render() {
        return (
            <div>
                <input type="text" placeholder="Pretraži" ref={this.inputRef} style={{ marginRight: 6 }} />
                <button type="button" onClick={e => this.onSearchCallback(e, this.inputRef?.current?.value)}>GO!</button>

                {this.state && (
                    <div>
                        <div>
                            {this.state.user && (
                                <div>
                                    <User key={this.state.user.id} user={this.state.user} />
                                </div>
                            )}
                        </div>
                        <div>
                            {this.state.repos && (this.state.repos.map(repo => {
                                return (
                                    <RepositoryItem key={repo.id} repo={repo} />
                                );
                            })
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    //click funckija koja dohvaća usera i njegove repozitorije
    onSearchCallback = async (e, searchPhrase) => {
        try {
            const userResponse = await fetch(`https://api.github.com/users/${searchPhrase}`);
            const userContent = await userResponse.json();

            const repoResponse = await fetch(`https://api.github.com/users/${searchPhrase}/repos`);
            const repoContent = await repoResponse.json();

            //postvaljanje statea 
            this.setState({
                user: userContent,
                repos: repoContent
            });
        } catch (error) {
            console.log("Error: " + error);
        }
    }
}

export default Search;