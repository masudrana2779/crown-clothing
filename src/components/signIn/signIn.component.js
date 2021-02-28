import React, {Component} from 'react';
import './signIn.scss';
import FormInput from "../form-input/form-input";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }


    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        label={'email'}
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        label={'password'}
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <input type="submit" value={'Submit Form'}/>
                </form>
            </div>
        )
    }
}

export default SignIn;