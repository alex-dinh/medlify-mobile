import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import Spotify from './Spotify'; // imports must be with "./{module name}"
import SoundCloud from "./SoundCloud";
import AllPlaylists from './AllPlaylists';


export default class TopTabs extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs/>
                <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}}>
                    <Tab heading="Spotify"
                         tabStyle={{backgroundColor: '#222'}}
                         textStyle={{color: '#fff'}}
                         activeTabStyle={{backgroundColor: '#222'}}
                         activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
                        <Spotify/>
                    </Tab>
                    <Tab heading="SoundCloud"
                         tabStyle={{backgroundColor: '#222'}}
                         textStyle={{color: '#fff'}}
                         activeTabStyle={{backgroundColor: '#222'}}
                         activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
                        <SoundCloud/>
                    </Tab>
                    <Tab heading="All Playlists"
                         tabStyle={{backgroundColor: '#222'}}
                         textStyle={{color: '#fff'}}
                         activeTabStyle={{backgroundColor: '#222'}}
                         activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
                        <AllPlaylists/>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    tabgray: {
        color: '#222222'
    }
})