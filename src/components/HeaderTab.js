
import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import HeaderAccordion from './HeaderAccordion';
import Panel from './Panel';

export default class HeaderTab extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(){
        this.props.navigation.navigate(routeName: 'Login');
    }

    render(){
        return (
            <HeaderAccordion>
                <TouchableOpacity>
                    <Text style={{fontSize: 12, color: '#fff', paddingBottom: 15, paddingTop: 10}}> SUPPORT </Text>
                </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{fontSize: 12, color: '#fff', paddingBottom: 15}}> ACCOUNT </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{fontSize: 12, color: '#fff', paddingBottom: 15}}> LOGOUT </Text>
                    </TouchableOpacity>
            </HeaderAccordion>
        )
    }
};