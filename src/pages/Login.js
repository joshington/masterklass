import React from 'react';
import {Link} from 'react-router-dom';
import { EntryPage,PageHeader } from './style';
import EntryCard from '../components/EntryCard/EntryCard';
import InputGroup from '../components/InputGroup/InputGroup';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function Login(){
    return (
        <EntryPage>
            <PageHeader to="/">AWESOME LOGO</PageHeader>
            <EntryCard>
                <h2>Log in</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="login-email">Email Address</label>
                        <input type="text" placeholder="name@email.com" id="login-email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="login-password">Password</label>
                        <input type="password" placeholder="Password" id="login-password" />
                    </InputGroup>
                    <Button type="submit" full>Log in</Button>
                </form>
                <span>
                    Do't have a account? 
                    <Link to="/signup">Sign up</Link>
                </span>
            </EntryCard>
        </EntryPage>
    )
}

export default Login;