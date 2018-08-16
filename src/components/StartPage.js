import React from 'react';
import {Text, View, Image} from 'react-native';

export default class StartPage extends React.Component {

    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            this.props.navigation.navigate('Login')
        }, 2000);
   }

   componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
   }


    render (){
        return (
            <View style={{flex: 1, alignItems:'center', justifyContent:'center', backgroundColor:'#26A69A'}}>
                <Image source={require('./new_panalyt_logo_white.png')} style= {{height: 121, width: 240}}/>
            </View>
        )
    }
}