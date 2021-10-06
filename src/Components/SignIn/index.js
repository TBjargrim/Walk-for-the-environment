import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';

import Leaf from '../../Images/Leaf.png'

import {StyledH2, WrapperSign, InputField, StyledB} from './StyleSignIn'
import {WrapperSignUp, StyledLeafS} from '../SignUp/StyleSignUp'

const SignInPage = () => (
    <>
    <WrapperSignUp>
    <StyledH2>Logga in</StyledH2>
    <StyledLeafS src={Leaf} alt='Leaf'/>
    </WrapperSignUp>
    <SignInForm />
    <SignUpLink />
    </>
    );

    const INITIAL_STATE = {
        email: '',
        password: '',
        error: null,
        };

        class SignInFormBase extends Component {
            constructor(props) {
            super(props);
            this.state = { ...INITIAL_STATE };
            }

            onSubmit = event => {
                const { email, password } = this.state;
                this.props.firebase
                .doSignInWithEmailAndPassword(email, password)
                .then(() => {
                    this.setState({ ...INITIAL_STATE });
                    this.props.history.push('/stepcounter');
                    })
                    .catch(error => {
                    this.setState({ error });
                    });
                    event.preventDefault();
                    };
                    onChange = event => {
                        this.setState({ [event.target.name]: event.target.value });
                        };
                        render() {
                            const { email, password, error } = this.state;
                            const isInvalid = password === '' || email === '';
                            return (
                                <WrapperSign>
                            <form onSubmit={this.onSubmit}>
                            <InputField
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email"
                            />
                            <InputField
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Lösenord"
                            />
                            <StyledB disabled={isInvalid} type="submit">
                            Logga in
                            </StyledB>
                            {error && <p>{error.message}</p>}
                            </form>
                            </WrapperSign>
                            );
                        }
                    }
                    const SignInForm = compose(
                    withRouter,
                    withFirebase,
                    )(SignInFormBase);
                    export default SignInPage;
                    export { SignInForm };