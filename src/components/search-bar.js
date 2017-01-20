import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: "enter your query here"
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={ event => this.onInputChange(event.target.value) }
                       placeholder={ this.state.placeholder } />
                <p>Searching for: <i>"{ this.state.term }"</i></p>
            </div>
        );
    }

    onInputChange(term) {
        console.log(term);
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;