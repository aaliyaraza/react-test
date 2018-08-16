import React from 'react';
import {View, Text} from 'react-native';
import HeaderTab from './HeaderTab';
import FooterTab from './FooterTab';
import Button from './Button';
import axios from 'axios';

export default class  WelcomePage extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        let first_name = navigation.getParam('first_name',{});
        let company = navigation.getParam('company',{});
        let token = navigation.getParam('token',null);
        let name = company.name;
        // console.log("employee",employee);
        this.state = {
          press: false,
          first_name:first_name,
          name: name,
          company:company,
          token:token
        };
        this.handleClick1 = this.handleClick1.bind(this);
    }

    handleClick1(){
        console.log("this.props.navigation",this.props.navigation);
        this.props.navigation.navigate('Search', {company:this.state.company, token: this.state.token});
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#26A69A', color: '#fff'}}>
                <HeaderTab/>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{borderBottomWidth: 1, borderColor: '#fff'}}>
                        <Text style={{height: 30, fontSize: 18, color: '#fff', marginTop: 80}}> Hello, {this.state.first_name} </Text>
                    </View>
                    <View>
                        <Button onPress={() => this.handleClick1()}> Employee Profile </Button>
                        <Button> What is People Analytics </Button>
                        <Button> Panalyt User Guide </Button>
                    </View>
                    <View>
                        <Text style={{alignContent: 'center', fontSize: 30, marginBottom: 20, color: '#fff', fontWeight: 'bold'}}> {this.state.name.toUpperCase()} </Text>
                    </View>
                </View>
            </View>
        )
    }
};
