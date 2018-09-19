import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'react-native-axios';

export default class Spotify extends Component {
    constructor() {
        super();
        this.state = {
            playlists: []
        }
    }

    componentDidMount() {
        this.getPlaylists();
    }

    getPlaylists() {

        fetch('https://api.spotify.com/v1/users/alexladinh/playlists', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer BQCsfaq4pqb4I0cnwQiExCHfbisxyP_C4O560joFjN1thfvcjU-iqYRMYxnvAGLs1uWCvLsoEpbI4jE8QX7ZvMYMdosZ2QzH7MbpQ_I7tFpvDUH5RVp8ea3PZ8Z_UcLsmhE4FhrmdpcG88nkuQo-WLNSmCXker655s82fXU'}
        }).then((response) => {
                console.log(response);
            }
        )
    }

    render() {
        return (
            <View>
                <Text>SPOTIFY</Text>
            </View>
        )
    }
}
