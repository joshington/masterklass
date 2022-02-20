import React from 'react';
import {Link} from 'react-router-dom';
import { EntryPage,PageHeader } from './style';
import EntryCard from '../components/EntryCard/EntryCard';
import InputGroup from '../components/InputGroup/InputGroup';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function Signup(){
    return (
        <EntryPage>
            <PageHeader to="/">AWESOME LOGO</PageHeader>
            <EntryCard>
                <h2>Sign up</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="signup-email">Username</label>
                        <input type="text" placeholder="John Doe" id="signup-name" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-email">Email Address</label>
                        <input type="text" placeholder="name@email.com" id="signup-email" />  
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-password">Password</label>
                        <input type="password" placeholder="Password" id="signup-password" /> 
                    </InputGroup>
                    <Button type="submit" full>Sign up</Button>
                </form>
                <span>
                    Already have an account?
                    <Link to="/login">Log in</Link>
                </span>
            </EntryCard>
        </EntryPage>
    )
}
export default Signup;