import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
export default class App extends React.Component {

  state = {albums:[]}

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data}) )
  }


  renderList(){
    return this.state.albums.map( item => 
      <Text key={item.title}>{item.title} </Text>
    );
  }
    render() {
      return (
        <View style={styles.container}>
          {this.renderList()}
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

