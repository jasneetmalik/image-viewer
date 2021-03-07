import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

import Header from '../../common/header/Header';
import './Login.css'

const styles = {
    card: {
        padding: '15px',
        position: 'relative',
        top: '90px',
        left: '50%',
        width: '325px',
        transform: 'translateX(-50%)',
    },
    title: {
        fontSize: 20
    }
}
class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            usernameRequired: "dispNone",
            password: "",
            passwordRequired: "dispNone",
            incorrectUsernamePassword: "dispNone",
            loggedIn: sessionStorage.getItem('access-token') == null ? false : true
        };
    }
    loginClickHandler = () => {
        this.setState({ incorrectUsernamePassword: "dispNone" });
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });

        if (this.state.username === "" || this.state.password === "") { return }

        // Default username and password is hardcoded. Access token is as per obtained from the Instagram APIs

        if (this.state.username === "jasneet_jaaj" && this.state.password === "upgrad@123") {
            sessionStorage.setItem('username','jasneet_jaaj');
            sessionStorage.setItem('access-token', 'IGQVJWZATR3emV0bzh3eVpiR2IxcDdUejlYMFA4UDhzT0JDeFljQ1J5WUNMcnc1UGhqa3ZAhemhYWGJ3ZAVB5ZA2RWMV9kOW9WRzBObDdiYXNvNHJVWjBTRHI3b19nNFlCRnNNNHFLOTJnSDlUamQwazNxdwZDZD');
            this.setState({ loggedIn: true });

            // Once login is validated and successful, navigation to Home UI page is performed
            this.navigateToHome();
        } else {
            this.setState({ incorrectUsernamePassword: "dispBlock" });
        }
    }
    navigateToHome = () =>{
        this.props.history.push('/home');
      }
      inputChangeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
      }
    render() {
        return (
            <div className="main-container">
                <Header
                  screen={"Login"}/>
                <Card style={styles.card}>
                    <CardContent>
                        <Typography style={styles.title}> LOGIN </Typography><br />
                        <FormControl required style={{width: '100%'}}>
                            <InputLabel htmlFor="username"> Username </InputLabel>
                            <Input 
                            type="text"
                            name="username" 
                            id="username"  
                            value={this.state.username} 
                            onChange={this.inputChangeHandler} 
                            />
                            <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required style={{width: '100%'}}>
                            <InputLabel htmlFor="password"> Password </InputLabel>
                            <Input 
                            name="password" 
                            id="password" 
                            type="password" 
                            value={this.state.password}
                            onChange={this.inputChangeHandler} 
                            />
                            <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <div className={this.state.incorrectUsernamePassword}><span className="red"> Incorrect username and/or password </span></div><br />
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}> LOGIN </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Login;