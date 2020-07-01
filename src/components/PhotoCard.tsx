import React, { PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { IPhotos } from "../models/photos";

interface Props {
    photo: {
        item: IPhotos
    }
}

export default class PhotoCard extends PureComponent<Props> {
    render() {
        const { photo } = this.props
        return (
            <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                <View style={styles.flexGrid}>
                    <Image style={styles.block} source={{uri: `${photo.item.url}`}} />
                    {console.log(this.props)}
                    
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    flexGrid: {
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    block: {
      margin: 5,
      width: '97%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  
