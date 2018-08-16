import React from 'react';
import axios from 'axios';
import {View, Text, ScrollView} from 'react-native';
import {SearchBar, searchIcon} from 'react-native-elements';
import SearchResult from './SearchResult';
import HeaderTab from './HeaderTab';

export default class EmployeeSearch extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        let company = navigation.getParam('company',{});
        let token = navigation.getParam('token',null);
        this.state = {
          press: false,
          name:company.name,
          token,
          employees:[],
          company:company
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(emp){
        console.log("this.props.navigation",this.props.navigation);
        this.props.navigation.navigate('Profile',{employee:emp,token:this.state.token,company:this.state.company})                
    }
    searchText(text){
        console.log("Text",text);
        let company = this.state.company;
        console.log("company",company);
        console.log("token",this.state.token);
        axios.defaults.headers.common['Authorization'] = `Token ${this.state.token}`;
        axios({
            method:'GET',
            url:`http://127.0.0.1:8000/api/v1/${company.slug}/employees/`,
            params:{
                q:text
            }
        }).then((res)=>{
            console.log("result",res);
            if(res.data.status && res.data.status.isSuccess){
                console.log("in here",res.data.employees);
                this.setState({employees:res.data.employees});
            }
        }).catch((error)=>{
            console.log("Error",error);
        })
    }
    render(){
        console.log("Employees",this.state.employees);
        return (
            <ScrollView style={{backgroundColor: '#26A69A', flex: 1}}>
                <HeaderTab/>
                <SearchBar
                    round
                    searchIcon={{ size: 24 }}
                    containerStyle={{backgroundColor: '#26A69A', borderWidth: 1, borderBottomColor: '#26A69A', borderTopColor: '#26A69A', borderRightColor: '#26A69A', borderLeftColor: '#26A69A'}}
                    inputStyle={{backgroundColor: '#239389', color: '#fff'}}
                    onChangeText={(text)=>this.searchText(text)}
                    //onClear={someMethod}
                    placeholder='SEARCH'
                    placeholderTextColor='#fff' />
                <View style={{paddingRight: 20, paddingLeft: 20}}>
                    {this.state.employees.map(emp =>
                        <SearchResult name={emp.first_name} job_grade={emp.job_grade.name} org_level={emp.org_level.name} location={emp.location.name} onPress={() => this.handleClick(emp)}/>                        
                    )}
                </View>
            </ScrollView>
        )
    }
};