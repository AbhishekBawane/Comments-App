import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loader: React.FC = () =>{
      return(
        <View style={styles.container}>
               <ActivityIndicator size="large" />
        </View>
      )
};


export default Loader;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});