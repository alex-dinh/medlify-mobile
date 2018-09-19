import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import drawer from '../resources/Icons/ic_drawer.png';

import { Drawer } from 'native-base';

const SideBar = () => {
    return(
        <View></View>
    );
};


export default class DrawerExample extends Component {
    render() {
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({

});