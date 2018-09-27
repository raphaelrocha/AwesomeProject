import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Line from '../components/Line'
import capitalizeFirsLetter from '../utils/capitalizeFirstLetter'

export default class PeopleDetailPage extends React.Component{
    render(){
        const {people} = this.props.navigation.state.params;
        return(
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: people.picture.large
                    }}
                />
                <View style={styles.detailContainer}>
                    <Line label="Email:" content={people.email}/>
                    <Line label="Cidade:" content={capitalizeFirsLetter(people.location.city)}/>
                    <Line label="Estado:" content={capitalizeFirsLetter(people.location.state)}/>
                    <Line label="Telefone:" content={people.phone}/>
                    <Line label="Celular:" content={people.cell}/>
                    <Line label="Nacionalidade:" content={people.nat}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:16
    },
    avatar:{
        aspectRatio: 1
    },
    detailContainer:{
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    }

});