import {Text, View, StyleSheet,Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding:20,
    backgroundColor:'#000',
    opacity:0.8,
    flexDirection: 'row-reverse',
    justifyContent:'flex-end',
  },
  text:{
    color:'#fff',
    paddingTop:35,
    fontSize:25,
    fontWeight: '700',
  }
  // ...
});

const AppBar = () => {
  return (
        <View style={styles.container}>
            <Pressable onPress={()=>console.log('pressed')}>
                <Text style={styles.text}>Repositories</Text>
            </Pressable>
        </View>
  )
};

export default AppBar;