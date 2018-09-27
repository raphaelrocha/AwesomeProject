import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Header = props => (
    <View style={style.container}>
        <Text style={style.title}>
            {props.title}
        </Text>
    </View>
);

const style = StyleSheet.create({
    container : {
        marginTop:25,
        height:56,
        backgroundColor:'#2f6f7a',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title : {
        fontSize:32,
        color:'#fff'
    }
});

export default Header;