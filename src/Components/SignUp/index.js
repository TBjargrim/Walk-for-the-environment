import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';

import Leaf from '../../Images/Leaf.png'
import {WrapperSignUp, StyledH2, StyledLeafS,  WrapperSign, InputField, StyledB, StyledP} from './StyleSignUp'


const SignUpPage = () => (
    <>
<WrapperSignUp>
<StyledH2>Skapa konto</StyledH2>
<StyledLeafS src={Leaf} alt='Leaf'/>
</WrapperSignUp>
<SignUpForm />
</>
);


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    };


    class SignUpFormBase extends Component {
constructor(props) {
super(props);
this.state = { ...INITIAL_STATE };
}
onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
    this.setState({ ...INITIAL_STATE });

    this.props.history.push('/wizzard');
    })
    .catch(error => {
    this.setState({ error });
    });
    event.preventDefault();
    };
onChange = event => {
};

onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    };
render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
        } = this.state;

        const isInvalid =
passwordOne !== passwordTwo ||
passwordOne === '' ||
email === '' ||
username === '';

return (

  <WrapperSign>
      <form
 onSubmit={this.onSubmit}>
<InputField
name="username"
value={username}
onChange={this.onChange}
type="text"
placeholder="Namn"
/>
<InputField
name="email"
value={email}
onChange={this.onChange}
type="text"
placeholder="Email"
/>
<InputField
name="passwordOne"
value={passwordOne}
onChange={this.onChange}
type="password"
placeholder="Lösenord"
/>
<InputField
name="passwordTwo"
value={passwordTwo}
onChange={this.onChange}
type="password"
placeholder="Upprepa lösenord"
/>
<StyledB disabled={isInvalid} type="submit">Skapa konto</StyledB>
{error && <p>{error.message}</p>}
</form>
<StyledP>Har du redan ett konto? <br/> <Link to='/signin'><span>Logga in</span></Link></StyledP>
</WrapperSign>
);
}
}

const SignUpLink = () => (
<StyledP>
Har du inget konto? <Link to='/signup'><span>Skapa konto</span></Link>
</StyledP>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;
export { SignUpForm, SignUpLink };