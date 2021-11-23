/*import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './AppStyle'

export const AppHeader = () => {
    return(
        <View style={style.header}>
            <Text style={style.text_big}> Application Title </Text>
        </View>
    );
}

export const AppContent = () => {
    return(
        <View style={style.container}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>App Content</Text>
            <Image source={require('./image/TelkomUniv-Logo.png')}
            style={{width: 300, height:50, resizeMode:'contain'}}></Image>

        </View>
    );
}

export const AppFooter = (props) => {
    return (
    <View style={{height:40, backgroundColor: 'gray'}}>
    <Text style={{fontWeight: 'bold',fontSize: 23, color:'white'}}>{props.footerContent}</Text>
    </View>
    );
    }
    */




import React from 'react';
import { Text, View, Image } from 'react-native';
export const AppHeader = () => {
return (
    <View style={{height:60, backgroundColor: 'gray'}}>
<Text style={{fontWeight: 'bold',fontSize: 32}}>App Title</Text>
</View>
);
}
export const AppContent = () => {
return (
<View>
<Text style={{fontWeight: 'bold',fontSize: 23}}>App Content</Text>
<Image source={require('./image/TelkomUniv-Logo.png')} 
style={{width: 375, height:100, resizeMode:'contain'}} />
</View>
);
}
export const AppFooter = (props) => {
return (
<View style={{height:40, backgroundColor: 'gray'}}>
<Text style={{fontWeight: 'bold',fontSize: 23, color:'white'}}>{props.footerContent}</Text>
</View>
);
}