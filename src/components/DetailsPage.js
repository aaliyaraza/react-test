import React from 'react';
import axios from 'axios';
import { View, Text, Header, Image } from 'react-native';
import CardSection from './CardSection';
import HeaderTab from './HeaderTab';

export default class DetailsPage extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        let employee = navigation.getParam('employee',{});
        let token = navigation.getParam('token',null);
        let last_login = employee.last_login;
        let first_name = employee.first_name;
        
        console.log("employee",employee,last_login);
        this.state = {
          press: false,
          company:employee.company,
          last_login:last_login,
          name:employee.company.name,
          first_name:first_name,
          employee:employee,
          token:token
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(company){
        console.log("this.props.navigation",this.props.navigation);

         this.props.navigation.navigate('Welcome',{first_name:this.state.first_name,company,employee:this.state.employee,token:this.state.token});
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#26A69A', color: '#fff'}}>
                <HeaderTab style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}/>   
                <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
                    {this.state.company.map(company => {
                        return (
                            <CardSection company={company.name.toUpperCase()} 
                                         lastLogin={this.state.last_login}
                                         onPress={() => this.handleClick(company)}/>
                        )
                    })}
                </View>
            </View>
        );
    }
};