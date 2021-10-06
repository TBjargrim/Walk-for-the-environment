import React from 'react';
import { withFirebase } from '../Firebase';

import {StyledB} from '../SignUp/StyleSignUp'
const SignOutButton = ({ firebase }) => (
<StyledB type="button" onClick={firebase.doSignOut}>
Logga ut
</StyledB>
);

export default withFirebase(SignOutButton);