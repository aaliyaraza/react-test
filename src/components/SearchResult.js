import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

const SearchResult = ({ name, job_grade, org_level, location, onPress }) => {

  return (
    <TouchableOpacity style={{borderBottomWidth: 1, borderColor: '#fff', backgroundColor: '#26A69A', marginleft: 6, marginRight: 6}} onPress={onPress}> 
        <Text style={{height: 25, fontSize: 18, color: '#fff', marginLeft: 26, marginBottom: 3, marginTop: 10.5}}> {name} </Text>
        <Text style={{height: 22, fontSize: 15, color: '#fff', marginLeft: 26, marginBottom: 15.5}}> {job_grade} | {org_level} | {location}</Text>
    </TouchableOpacity >
  );
};

export default SearchResult;