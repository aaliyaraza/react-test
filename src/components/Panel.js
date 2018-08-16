import React from 'react';
import {Component,StyleSheet,Text,View,Image,TouchableOpacity,Animated,} from 'react-native';

export default class Panel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title       : props.title,
            expanded    : false,
            animation   : new Animated.Value()
        };
    }

    toggle(){
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded
        });

        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight: event.nativeEvent.layout.height,
            animation: new Animated.Value(event.nativeEvent.layout.height),
        });
    }

    render(){

        return (
            <Animated.View style={[styles.container,{height: this.state.animation}]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}>
                        <Text style={styles.title}>{this.state.title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    container   : {
        overflow:'hidden',
        
    },
    titleContainer : {
        flexDirection: 'row',
        height: 52
    },
    title       : {
        flex    : 1,
        paddingTop: 12.5,
        paddingBottom : 12.5,
        paddingLeft: 24.3,
        fontSize: 18,
        color   :'#fff',
        fontWeight:'bold'
    },
    button      : {
        flex: 1
    },
    body        : {
        padding     : 10,
        paddingTop  : 0,
        color: '#fff'
    }
});
