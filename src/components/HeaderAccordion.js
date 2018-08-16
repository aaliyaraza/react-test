import React from 'react';
import {Component,StyleSheet,Text,View,Image,TouchableOpacity,Animated} from 'react-native';

export default class HeaderAccordion extends React.Component{
    constructor(props){
        super(props);

        this.state = {
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
            <Animated.View style={{overflow:'hidden', height: this.state.animation}}>
                <View style={{flexDirection: 'row'}} onLayout={this._setMinHeight.bind(this)}>
                    <TouchableOpacity 
                        style={{flex: 1}} 
                        onPress={this.toggle.bind(this)}>
                        <View style={{height: 54, borderColor: '#26A69A', marginLeft: 330, paddingBottom: 5}}>
                            <Image source={require('./Panalyt_P.png')} style={{marginTop: 22,height: 27, width: 25, alignContent: 'flex-end'}}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft: 244, backgroundColor: '#239389'}} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}



