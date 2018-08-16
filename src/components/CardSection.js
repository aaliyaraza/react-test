import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CardSection = ({company, onPress, lastLogin}) => {
    // console.log("onPress",onPress,company);
    return (
        <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
            <Text key='company' style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}> {company} </Text>
            <Text style={{fontSize: 12, color: '#fff', paddingTop: 7}}> last login </Text>
            <Text key='last_login' style={{fontSize: 12, color: '#fff'}}> {lastLogin} </Text>
        </TouchableOpacity>
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        borderBottomWidth: 1,
        width: 330,
        backgroundColor: '#26A69A',
        borderColor: '#fff',
        alignItems: 'center',
        paddingTop: 28,
        paddingBottom: 20,
        paddingRight: 2,
        paddingLeft: 2
    }
}

export default CardSection;