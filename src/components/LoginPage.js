import React, { Component } from 'react';
import {Text, View, Image, Linking, TextInput, KeyboardAvoidingView} from 'react-native';
import TealButton from './TealButton';
import {WhiteButton} from './WhiteButton';
import axios from 'axios';


export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          showPass: true,
          press: false,
          email:'',
          password:'',
          error:false,
          errorMessage:''
        };
        this.showPass = this.showPass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
    };
    
    showPass() {
    this.state.press === false
        ? this.setState({showPass: false, press: true})
        : this.setState({showPass: true, press: false});
    };
    
    handleChange(dim, value){
        this.setState(prevState =>{
            prevState[dim] = value;
            return prevState;
        });
    }
    handleClick1(){
        console.log("this.props.navigation",this.props.navigation);
        // axios.post('http://127.0.0.1:8000/api/v1/authenticate/',{email:this.state.email,password:this.state.password})
        axios({
            method:'POST',
            url:'http://127.0.0.1:8000/api/v1/authenticate/',
            data:{email:this.state.email,password:this.state.password}
        }).then(result => {
            if(result.status == 200 && result.data.status.isSuccess){
                this.props.navigation.navigate('Details',{employee:result.data.employee,token:result.data.token});                
            }else{
                this.setState({error:true,errorMessage:result.data.error});
            }
            console.log("result",result);
        }).catch(error =>{
            console.log(error);
            this.setState({error:true,errorMessage:'Something went wrong!'});
        })
    }
    render () {

    const {loginStyle, buttonStyle, passwordStyle, textStyle, imageStyle} = styles;
    console.log("this.state",this.state);
    
    return (
        <View style={styles.container}>
            <View style={{alignItems:'flex-start'}}>
                <Image source={require('./new_panalyt_logo_white.png')} style= {imageStyle}/>
            </View>
            <KeyboardAvoidingView behavior="padding">
                <View style={{borderBottomWidth: 1, borderColor: '#fff', fontColor: '#fff'}}>
                    <TextInput style={textStyle} 
                        placeholder="Email" 
                        placeholderTextColor="white" 
                        autoCapitalize = "none" 
                        value={this.state.email} 
                        onChangeText={(value) => this.handleChange('email',value)}
                        />
                </View>
                <View style={{borderBottomWidth: 1, borderColor: '#fff'}}>
                    <TextInput 
                    style={textStyle} 
                    value={this.state.password}
                    placeholder="Password" 
                    placeholderTextColor="white" 
                    autoCapitalize = "none" 
                    secureTextEntry={this.state.showPass}
                    onChangeText={(value) => this.handleChange('password',value)}
                    />
                </View>
            </KeyboardAvoidingView>
            {this.state.error ? 
            <View style={{justifyContent: 'flex-start', flexDirection: 'row', marginTop: 36.5}}>
                <Text style={{color:'red'}}>
                    {this.state.errorMessage}
                </Text>
            </View>:
            null}
            <View style={{justifyContent: 'flex-start', flexDirection: 'row', marginTop: 36.5}}>
                <TealButton style={passwordStyle}> Forgot Password </TealButton>
                <WhiteButton style={loginStyle} onPress={() => this.handleClick1()}> LOGIN </WhiteButton>
            </View>
        
        </View>
    );
    }
}

const styles = {
    passwordStyle: {
        fontSize: 15,
        fontColor: 'white',
    },
    loginStyle: {
        marginTop: 3.4
    },
    buttonStyle: {
        alignSelf: 'right',
        width: 30,
        backgroundColor: '#fffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fffff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        marginTop: 16,
        marginBottom: 9.5,
        fontSize: 18,
        height: 34.5,
        width: 317,
        color: '#fff'
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 121,
        width: 240,
        marginLeft: 39.5
    },
    container:{
        flex: 1, 
        paddingLeft: 29, 
        paddingRight: 29, 
        justifyContent: 'center',
        backgroundColor: '#26A69A',
        color: '#fff'
    }
};
