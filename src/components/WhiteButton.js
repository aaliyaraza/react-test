import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const WhiteButton = ({onPress,style, children})=>{
  console.log("style",style,"onPress",onPress);
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#26A69A',
    fontSize: 10,
    marginTop: 5.7
  },
  buttonStyle: {
    alignSelf: 'stretch',
    height: 25.4,
    width: 62.8,
    backgroundColor: '#fff',
    borderRadius: 12.7,
    borderWidth: 1,
    borderColor: '#fff'
  }
};