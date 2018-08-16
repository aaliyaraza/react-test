import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 22,
    alignSelf: 'center'
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#24A59A',
    borderWidth: 1,
    borderColor: '#24A59A',
  }
};

export default Button;