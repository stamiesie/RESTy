import React, { Component } from 'react';
import { apiCall } from '../../services/ApiCall';
import Header from '../presentation/Header';
import FormInput from '../presentation/FormInput';
import DisplayResults from '../presentation/DisplayResults';

export default class Resty extends Component {
    state = {
        url: '',
        method: '',
        body: '',
        results: [],
    }
// using dynamic property keys eliminates the need to make multiple handleChanges for text, method(radio) inputs and body
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchData();
    }

    fetchData = () => {
        // destructure off of state, set state
        const { url, method, body } = this.state;

        // set results state with API response
         return apiCall(url, method, body)
         .then(response => this.setState({ results: response }))
    }
    
    render() {
        // destructure off of state
        const { url, method, body, results} = this.state;
        // console.log('resty results:', url, method, body);
        return (
            <>
                <Header />
                <FormInput 
                url={url}
                method={method}
                body={body}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange} 
                />
                <DisplayResults results={results} />
            </>
        )
    }
}
