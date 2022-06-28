import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import LogoComponent from '../components/LogoComponent';
import CardContainer from './CardContainer';
const image = require('../assets/seigaiha.png');
const Home = () => {
  return (
    <View style={styles.safeArea}>
      <ImageBackground source={image} style={styles.image} resizeMode="repeat">
        <ScrollView>
          <LogoComponent />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Shop Our Collection</Text>
          </View>
          <View>
            <CardContainer />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  image: {
    flex: 1,
  },
  title: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'column',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
export default Home;
