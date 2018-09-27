import React from 'react';
import { FlatList, Text, StyleSheet} from 'react-native';
import PeopleListItems from './PeopleListItems'

const PeopleList = props => {

    const {peoples, onPressItem} = props;

    return (
        <FlatList
            style={styles.container}
            data={peoples}
            renderItem={({item}) => (
                <PeopleListItems
                    people={item}
                    navigateToPeopleDetails={onPressItem}
                />
            )}
            keyExtractor={item => item.login.uuid}
        />
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;