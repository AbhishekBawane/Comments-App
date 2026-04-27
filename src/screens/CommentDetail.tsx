import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

const CommentDetail: React.FC<Props> = ({route}) =>{
    
    const { name, email, body, postId } = route.params;

    return(
        <View style={styles.container}>
              <Text style={styles.name}> <Text style={styles.head}>Name: </Text> {name}</Text>
              <Text style={styles.email}><Text style={styles.head}>Email:</Text> {email}</Text>
              <Text><Text style={styles.head}>Post Id: </Text>{postId}</Text>
              <Text style={styles.body}><Text style={styles.head}>Body: </Text> {body}</Text>
        </View>
    );
};

export default CommentDetail;


const styles = StyleSheet.create({
    container:{padding: 16, backgroundColor:"#7b2c", },
    head:{color:'white', fontWeight:'bold'},
    name: {fontWeight:"bold", fontSize: 18},
    email:{color: "red", marginBottom: 10},
    body:{marginTop: 10},
})