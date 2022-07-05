import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import Header from './../Header/Header';
import SearchBox from './../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    //define state for header
    constructor() {
        super()
        this.state = {
            headTitle: "NAME IT!",
            headerExpanded: true,
            suggestedNames : [],
        };
    }
    //function to get user input value
    handleInput = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames : inputText ? name(inputText) : [],
        });
        console.log("", inputText);
        console.log("", name(inputText));
    };
    render() {
        return (<div>
            <Header headTitle={this.state.headTitle}
            headerExpanded={this.state.headerExpanded}/>
            <SearchBox onInputChange={this.handleInput} />
            <ResultsContainer suggestedNames={this.state.suggestedNames} />
        </div>);
    }    
}

export default App;