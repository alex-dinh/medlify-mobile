import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'react-native-axios';
import {Container, Header, Content, List, ListItem} from 'native-base';


export default class SoundCloud extends Component {
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
        axios.get('https://api.soundcloud.com/users/80lux/playlists?client_id=ueCJznjk0tvGY5Jok607pqOtHiFEKjIR')
            .then((response) => { // promise returns: require arrow functions to work properly
                console.log(response.data);
                this.setState({
                    playlists: SoundCloud.buildPlaylistList(response)
                })
            });
    }

    static buildPlaylistList(response) {
        let playlists = [];
        for (let i = 0; i < response.data.length; i++) {
            playlists.push({
                id: i,
                title: response.data[i].title,
                playlistId: response.data[i].uri.split("/")[4] // string splitting hax
            })
        }
        return playlists;
    }

    render() {
        return (
            <Container>
                <Text>SOUNDCLOUD</Text>
                {/*<Header/>*/}
                <Content>
                    <List>
                        {this.state.playlists.map(function (playlist, i) {
                            return (
                                <SCPlaylistButton key={"playlist" + i}
                                                  title={playlist.title}/>
                            );
                        })}
                    </List>
                </Content>
            </Container>
        )
    }
}

class SCPlaylistButton extends Component {
    render() {
        return (
            <ListItem>
                <Text>{this.props.title}</Text>
            </ListItem>

        );
    }
}