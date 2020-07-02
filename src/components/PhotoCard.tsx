import React, {PureComponent} from "react";
import {StyleSheet, View, TouchableOpacity, Image, Dimensions} from "react-native";
import {IPhotos} from "../models/photos";
import { NavigationContainerRef } from "@react-navigation/core";

interface Props {
  photo: IPhotos;
  navigation: NavigationContainerRef;
}


export default class PhotoCard extends PureComponent<Props> {
  
  render() {
    const {photo, navigation} = this.props;
    return (
      <TouchableOpacity style={{backgroundColor: "transparent"}} onPress={() => {
        navigation.navigate("Photo", photo)
      }}>
        <View >
          <Image style={styles.image} source={{uri: `${photo.url}`}} />
        </View>
      </TouchableOpacity>
    );
  }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    margin: 3,
    width: windowWidth/3 - 6,
    height: windowWidth/3 - 6,
  },
});
