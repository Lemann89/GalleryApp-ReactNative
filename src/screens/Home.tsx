import {StatusBar} from "expo-status-bar";
import React, {PureComponent} from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import {HttpService} from "../services/http.service";
import {IPhotos} from "../models/photos";
import PhotoCard from "../components/PhotoCard";

interface Props {
  navigation: any;
}

export class Home extends PureComponent<Props> {
  state = {
    imageList: []
  };

  http = new HttpService();

  componentDidMount() {
    this.http
      .getAllPhotos()
      .then((photos) => this.setState({imageList: photos}));
  }

  render() {
    const {imageList} = this.state;
    const {navigation} = this.props;
    return (
        <View style={styles.container}>
          <FlatList
            data={imageList}
            renderItem={({item}) => <PhotoCard photo={item} navigation={navigation}/>}
            keyExtractor={(item: IPhotos) => item.id.toString()}
            numColumns={3}
          />
          <StatusBar style="auto" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
  },
  blockText: {
    fontSize: 20,
  },
});
