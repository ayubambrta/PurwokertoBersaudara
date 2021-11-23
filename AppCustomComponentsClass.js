import React from 'react';
import { Component } from 'react';
import { Text, View, Image } from 'react-native';
class AppHeader extends Component {
    render() {
        return (
        <View style={{height:60, backgroundColor: 'gray'}}>
            <Text style={{fontWeight: 'bold',fontSize: 32}}>App Title Class</Text>
            </View>
            );
        }
}

class AppContent extends Component {
    render() {
        return (
        <View>
            <Text style={{fontWeight: 'bold',fontSize: 23}}>App Content Class</Text>
            <Image source={require('./image/TelkomUniv-Logo.png')} style={{width: 375, height:100, resizeMode:'contain'}} />
            </View>
            );
        }
    }
    
    export {AppHeader, AppContent}