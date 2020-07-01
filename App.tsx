import {StatusBar} from "expo-status-bar";
import React, {PureComponent} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import {HttpService} from "./src/services/http.service";
import {IPhotos} from "./src/models/photos";
import PhotoCard from "./src/components/PhotoCard";

export default class App extends PureComponent {
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
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={imageList}
            renderItem={({item}) => <PhotoCard photo={item}/>}
            keyExtractor={(item: IPhotos) => item.id.toString()}
          />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    marginTop: 30,
  },
  blockText: {
    fontSize: 20,
  },
});
