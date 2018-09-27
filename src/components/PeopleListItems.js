import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {capitalizeFirstLetter} from '../utils'

const PeopleListItems = props => {

    const {people, navigateToPeopleDetails} = props;
    const {title, first, last} = people.name;

    return (
        <TouchableOpacity onPress={() => {
            // this.props.navigation.navigate(/*Chave da página*/, /*dados para a próxima página*/)
            navigateToPeopleDetails({people});
            console.log('Clicou aqui',first)
        }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{
                    uri: people.picture.thumbnail
                }}/>
                <Text style={styles.lineText}>
                    {`${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#e2f9ff'
    },
    line:{
        height: 60,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText:{
        fontSize: 20,
        paddingLeft: 15,
        flex:7
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 25
    }
});

export default PeopleListItems;