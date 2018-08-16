import React from 'react';
import {AppRegistry,StyleSheet,Text,ScrollView, View} from 'react-native';
import Panel from './Panel';
import HeaderTab from './HeaderTab';
import axios from 'axios';

export default class EmployeeProfile extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        let company = navigation.getParam('company',{});
        let employee = navigation.getParam('employee',{});
        let token = navigation.getParam('token',null);
        let id = employee.id;
        this.state = {
          press: false,
          token,
          employees:[],
          company:company,
          employee,
          id:id,
          slug:company.slug
        };
    }

    componentDidMount(){
        console.log("MOUNTING",`${this.state.company.slug}`,this.state.id);
        axios.defaults.headers.common['Authorization'] = `Token ${this.state.token}`;
        axios({
            method:'GET',
            url:`http://127.0.0.1:8000/api/v1/${this.state.company.slug}/employee/${this.state.id}/`,
            params:{
                slug:this.state.slug,
                id:this.state.id
            }
        }).then((res)=>{
            console.log("result",res);
            if(res.data.status && res.data.status.isSuccess){
                this.setState({employees:res.data.employees});
                // nextState[employees] = res.data.employees
            }
        }).catch((error)=>{
            console.log("Error",error);
        })
    };

    render(){
        console.log("this.state",this.state);
        return (
            <View style={{flex: 1, backgroundColor: '#26A69A'}}>
                <HeaderTab/>
                {this.state.employees.length !== 0 ? 
                <ScrollView>
                    <View style={{backgroundColor: '#26A69A'}}>
                        <Panel title="Employee Profile">
                            <View style={{paddingLeft: 26, flex: 1, flexDirection: 'row'}}>
                                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}> {this.state.employees.first_name} </Text> 
                                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff', paddingTop: 6}}> {this.state.employees.employee_id} </Text> 
                            </View>
                            <View style={{paddingLeft: 49}}>
                                <Text style={{fontSize: 18, color: '#fff', paddingTop: 15}}>Full Name: {this.state.employees.full_name}</Text>
                                <Text style={{fontSize: 18, color: '#fff', paddingTop: 15}}>Title: {this.state.employees.job_title}</Text>
                                <Text style={{fontSize: 18, color: '#fff', paddingTop: 15}}>Organisation: {this.state.employees.org_level.map(grade=> grade.name+', ')}</Text>
                                <Text style={{fontSize: 18, color: '#fff', paddingTop: 15}}>Location: {this.state.employees.location.map(grade=> grade.name+', ')}</Text>
                                <Text style={{fontSize: 18, color: '#fff', paddingTop: 15}}>Manager: {this.state.employees.manager.display_name}</Text>
                                <Text style={{fontSize: 18, color: '#fff', paddingTop: 15, marginBottom: 85}}>Hire Date: {this.state.employees.hire_date}</Text>
                            </View>
                        </Panel>
                    </View>

                    <View style={{backgroundColor: '#4D4D4D'}}>
                        <Panel title="Personal Information">
                            <View style={{paddingLeft: 26, paddingRight: 15, flex: 1, flexDirection: 'row'}}>
                                    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}> {this.state.employees.first_name} </Text> 
                                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff', paddingTop: 6}}>88424</Text> 
                            </View>
                            <View style={{paddingLeft: 42.2}}>
                                <Text style={{fontSize: 14, color: '#fff', paddingTop: 13}}>Nationality: {this.state.employees.personal_details.nationality}</Text>
                                <Text style={{fontSize: 14, color: '#fff', paddingTop: 13}}>Date of Birth: {this.state.employees.dob}</Text>
                                <Text style={{fontSize: 14, color: '#fff', paddingTop: 13}}>Private Contact Details:</Text>
                                    <Text style={{paddingLeft: 19, fontSize: 14, color: '#fff', paddingTop: 6}}>email: {this.state.employees.personal_details.email}</Text>
                                    <Text style={{paddingLeft: 19, fontSize: 14, color: '#fff', paddingTop: 4}}>phone: {this.state.employees.personal_details.phone}</Text>
                                <Text style={{fontSize: 14, color: '#fff', paddingTop: 13}}>Emergency Contact Details:</Text>
                                    <Text style={{paddingLeft: 19, fontSize: 14, color: '#fff', paddingTop: 8}}>Name: {this.state.employees.personal_details.emergency_contact_name}</Text>
                                    <Text style={{paddingLeft: 19, fontSize: 14, color: '#fff', paddingTop: 4}}>Relationship: {this.state.employees.personal_details.emergency_contact_relationship}</Text>
                                    <Text style={{paddingLeft: 19, fontSize: 14, color: '#fff', paddingTop: 4}}>Email: {this.state.employees.personal_details.emergency_contact_email}</Text>
                                    <Text style={{paddingLeft: 19, fontSize: 14, color: '#fff', paddingTop: 4}}>Phone: {this.state.employees.personal_details.emergency_contact_phone}</Text>
                                <Text style={{fontSize: 16, color: '#fff', paddingTop: 13}}>Age:</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 54, paddingTop: 9, paddingBottom: 10}}>
                                    <Text style={{fontSize: 35, color: '#fff', paddingTop: 7}}> {Math.floor((new Date() - new Date(this.state.employees.dob)) /31536000000)} </Text>
                                    <View style={{flexDirection: 'column'}}> 
                                        <Text style={{fontSize: 7, color: '#fff', paddingLeft: 9}}> AVERAGE </Text>
                                        <Text style={{fontSize: 35, color: '#fff'}}> 29 </Text>
                                    </View>
                                    <View style={{flexDirection: 'column', justifyContent: 'center'}}> 
                                        <Text style={{fontSize: 7, color: '#fff', paddingLeft: 11}}> OLDEST </Text>
                                        <Text style={{fontSize: 35, color: '#fff'}}> 62 </Text>
                                    </View>
                                </View>
                                <Text style={{fontSize: 16, color: '#fff', height: 40}}>Commuting Time:</Text>
                                                            {/* INSERT MAP HERE */}
                            </View>
                        </Panel>
                    </View> 

                    <View style={{backgroundColor: '#9D1E5C'}}>
                        <Panel title="Compensation">

                            <View style={{paddingLeft: 24, flex: 1, flexDirection: 'row'}}>
                                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}> {this.state.employees.first_name} </Text> 
                                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff', paddingTop: 6}}> {this.state.employees.employee_id} </Text> 
                            </View>

                            <Text style={{fontSize: 18, color: '#fff', paddingTop: 13, paddingLeft: 26}}>Local Currency Base Salary:</Text>
                                <Text style={{paddingLeft: 45, fontSize: 14, color: '#fff', paddingTop: 13}}>Monthly: {this.state.employees.base_original_salary} {this.state.employees.original_currency_code.toUpperCase()}</Text>
                                <Text style={{paddingLeft: 45, fontSize: 14, color: '#fff', paddingTop: 13}}>Annually: {Math.floor(this.state.employees.base_original_salary*12)} {this.state.employees.original_currency_code.toUpperCase()}</Text>
                            
                            <Text style={{fontSize: 18, color: '#fff', paddingTop: 13, paddingLeft: 26}}>Local Currency Base Salary:</Text>
                                <Text style={{paddingLeft: 45, fontSize: 14, color: '#fff', paddingTop: 13}}>Monthly: {this.state.employees.salary} {this.state.employees.currency_code}</Text>
                                <Text style={{paddingLeft: 45, fontSize: 14, color: '#fff', paddingTop: 13, paddingBottom: 10}}>Annually: {Math.floor(this.state.employees.salary*12)} {this.state.employees.currency_code}</Text>

                        </Panel>
                    </View>

                    <View style={{backgroundColor: '#F6891F'}}>
                        <Panel title="Performance">
                            <Text style={{fontSize: 14, color: '#fff', paddingTop: 13, justifyContent: 'center'}}> No Performance data to be shown! </Text>
                        </Panel>
                    </View>

                </ScrollView>
                :null}
            </View>
        )
    }
};