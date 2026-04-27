import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface Props{
    message:  String;
    onRetry: () => void;
};

const ErrorView: React.FC<Props> = ({message, onRetry}) =>{
       return(
         <View style={styles.container}>
              <Text>{message}</Text>
              <Button title="Retry" onPress={onRetry}/>
         </View>
       )
};

export default ErrorView;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 50
    }
})