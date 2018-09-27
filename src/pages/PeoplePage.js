import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            peoples: [],
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        axios
            .get('https://randomuser.me/api/?nat=br&results=150')
            .then(response => {
                console.log('sucesso na requisição');
                const {results} = response.data;
                this.setState({
                    peoples: results,
                    loading: false
                });
            })
            .catch(error => {
                console.log('caiu no catch');
                this.setState({
                    loading: false,
                    error: true
                })
            });
    };

    renderLoading() {
        return (<ActivityIndicator size="large" color="#2f6f7a"/>);
    };

    renderList() {
        if (this.state.error) {
            return (<Text style={styles.error}>Deu ruim!</Text>);
        } else {
            return (
                <PeopleList
                    peoples={this.state.peoples}
                    onPressItem={pageParams => {
                        this.props.navigation.navigate('PeopleDetail', pageParams);
                    }}
                />);
        }

    };

    render() {
        return (
            <View style={styles.container}>
                {/*{ this.renderLoading() }*/}
                {
                    this.state.loading
                        ? this.renderLoading()
                        : this.renderList()
                }
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center'
        },
        error: {
            fontSize: 18,
            color: 'red',
            alignSelf: 'center'
        }
    }
);
