import { render } from '@testing-library/react';
import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <input name='email' type='email' value={this.state.email} required />
                    <label>Email</label>
                    <input name='email' type='password' value={this.state.password} required />
                    <label>Email</label>

                    <input type='submit' value='submit Form' />
                </form>
            </div>
        )
    }
}




export default SignInl