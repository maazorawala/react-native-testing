/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatView,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Carousel, { Pagination } from       'react-native-x-carousel';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DATA =[
  {
    text:'#1' ,
    converimg:'https://i.ibb.co/Ry0ndhC/f1collage-1.jpg' 
  },
  {
    text:'#2',
    converimg:'https://i.ibb.co/GJLKQRr/jos.jpg',
  },
  {
    text:'#3',
    converimg:'https://i.ibb.co/sJSxb7N/max.jpg'
  },
];
const App= () => {
  const getFullName = (firstName, secondName, thirdName) =>{
    return firstName + " " + secondName + " " + thirdName;
  }
  const _onPress =()=>{
    alert('You have tapped the button')
  }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const isDarkMode = useColorScheme() === 'dark';

  const renderItem = data =>(
    <View key={data.text} style={styles.item} >
      <Image source={{uri: data.converimg}} style={{width:350, height:200, overflow:'hidden', margin:20, borderRadius:20}} />
    </View>
  )
  return (
     <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{backgroundColor: isDarkMode ? Colors.black : Colors.white,color: isDarkMode ? Colors.light : Colors.dark}}>

          <Text style={[{color: isDarkMode ? Colors.white : Colors.black}, styles.designText]} >Sample text</Text>

          <Text style={[{color: isDarkMode ? Colors.white : Colors.black}]}>Testing Sned it Boiiiiiccv</Text>

          <Text style={[{color: isDarkMode ? Colors.white : Colors.black}]}>Hello I am {getFullName("Maaz", "Maqbool", "Orawala")} </Text>

      <Button onPress={_onPress} title="Press me" style={styles.buttonNew} />

      <View style={styles.containerCaar}>

        <Carousel   pagination={Pagination} renderItem={renderItem} data={DATA} autoplay loop />

      </View>
      <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={[{backgroundColor: isDarkMode ? Colors.black : Colors.black,}, {flex:1}]} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
      
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  designText:{
    fontSize:40,
    
  },
  container: {
    flex: 1,
    height:500,
    width:'100%',
  },
  buttonNew:{
    margin:20,
    backgroundColor:'#fff',
  },
  containerCaar: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    borderRadius:20,
  },
  item: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
