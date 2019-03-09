## Observaciones: 
  Falta crear mis propias etiquetas para evitar el código espagueti.
```js
import React from 'react';
import { StyleSheet, Text, ImageBackground,TextInput} from 'react-native';
import { Header, Container, Button, Content, Input
, Item, Footer, Tab, Tabs, View, TabHeading } from 'native-base';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component';
export default class App extends React.Component {
  render() {
    return (
    
      <Tabs  style={styles.header}>
        <Tab style={styles.contenido} heading={<TabHeading style={{backgroundColor:'black'}}><Text><Ionicons name="md-settings" size={25} color={'white'}></Ionicons> </Text></TabHeading>}>
        <ImageBackground style={styles.container} style={{ width:'100%', height:'100%'} } source={require('./assets/back.jpg')} >
            <View style={{flex: 1, flexDirection: 'column',alignItems:'center',justifyContent:'flex-start'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.textInputs}>Número de series: </Text>
                <TextInput style={styles.inputs} placeholder='' size={1} placeholderTextColor="white" >
                </TextInput>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.textInputs}>Tiempo por serie: </Text>
                <TextInput style={styles.inputs} placeholder='' size={1} placeholderTextColor="white" >
                </TextInput>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.textInputs}>Tiempo de descanso: </Text>
                <TextInput style={styles.inputs} placeholder='' size={1} placeholderTextColor="white" >
                </TextInput>
              </View>
            </View>
            <Footer  style={styles.footer}>
              <View>
                  <Text style={styles.text}>
                    By Carles Ramos
                  </Text>
              </View>
            </Footer>
            
          </ImageBackground>
        </Tab>
        <Tab  heading={<TabHeading style={{backgroundColor:'black', }}><Text><Ionicons name="md-walk" size={25} color={'white'}></Ionicons> </Text></TabHeading>}>
          <ImageBackground style={{ width:'100%', height:'100%'} } source={require('./assets/back.jpg')} >
            <View style={{flex: 1, flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <CountDown 
                until={10 * 10 + 30}
                size={80}
                onFinish={() => alert('Finished')}
                digitStyle={{backgroundColor: '#646464',opacity:0.7}}
                digitTxtStyle={{color: 'white'}}
                timeToShow={['M', 'S']}
                timeLabels={['','']}
              />
              <View>
                <Button style={styles.boton}>
                  <Text style={{color:'white'}}>Pausar actividad</Text>
                </Button>
              </View>
              
            </View>
            <Footer  style={styles.footer}>
              <View>
                  <Text style={styles.text}>
                    By Carles Ramos
                  </Text>
              </View>
            </Footer>
            
          </ImageBackground>
      

        </Tab>
        <Tab  heading={<TabHeading style={{backgroundColor:'black'}}><Text><Ionicons name="md-man" size={25} color={'white'}></Ionicons> </Text></TabHeading>}>
        
          <ImageBackground style={{ width:'100%', height:'100%'} } source={require('./assets/back.jpg')} >
            <View style={{flex: 1, flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
                <CountDown 
                  until={5 * 10 + 30}
                  size={80}
                  onFinish={() => alert('Finished')}
                  digitStyle={{backgroundColor: '#646464',opacity:0.7}}
                  digitTxtStyle={{color: 'white'}}
                  timeToShow={['M', 'S']}
                  timeLabels={['','']}
                />
              <View>
                <Button style={styles.boton}>
                  <Text style={{color:'white'}}>Pausar descanso</Text>
                </Button>
              </View>
            </View>
            <Footer  style={styles.footer}>
              <View>
                  <Text style={styles.text}>
                    By Carles Ramos
                  </Text>
              </View>
            </Footer>
          </ImageBackground>
         </Tab>
      </Tabs>
   
    
    );
  }
}

const styles = StyleSheet.create({
  Tabs:{
    backgroundColor: 'orange'
  },
  container: {
    display:'flex',
    flex:1,
    justifyContent: 'center',
    
  },
    header: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'white',
      display:'flex',
      flex:1,
      justifyContent:'center',
    },
      text:{
        fontSize: 15,
        color: 'white',
      },
      bhead:{
        
        backgroundColor:'grey',
      },
    contenido:{
      flex:1,
      alignContent:'center',
    },
      inputs:{
        height: 30,
        width:55,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        color:'white',
        fontSize:25,
        margin:30,
      },  
        textInputs:{
          color:'white',
          fontSize: 25,
        },
    footer:{
      display:'flex',
      alignItems:'center',
      backgroundColor: 'black',
      fontSize:20,
      opacity:0.6,
    },
    Text:{
      color: 'white',
    },
    boton:{
      marginTop:70,
      borderRadius:10,
      backgroundColor:'#646464',
      opacity:0.7,
      color:'white'
    }
});
```
