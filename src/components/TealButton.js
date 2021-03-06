import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const TealButton = ({ onPress, children }) => {
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
    fontSize: 15,
    marginTop: 5.7
  },
  buttonStyle: {
    alignSelf: 'stretch',
    height: 27,
    width: 245,
    backgroundColor: '#26A69A',
    borderWidth: 1,
    borderColor: '#26A69A',
  }
};

export default TealButton;