import React, { PureComponent } from 'react';
import {StyleSheet, View, Text, Image} from "react-native";
import {IPhotos} from "../models/photos";

interface Props {
    route: {
        params: IPhotos
    } 
}

export class Photo extends PureComponent<Props> {
    render() {
        const {route} = this.props
        return (
            <View style={styles.flexGrid}>
                <Image style={styles.image} source={{uri: `${route.params.url}`}}/>
                <Text style={styles.title}>{route.params.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexGrid: {
      flexDirection: "column",
      flexWrap: "wrap",
      margin: 5,
    },
    image: {
      width: "97%",
      height: 300,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
        fontSize: 25,
    }
});

