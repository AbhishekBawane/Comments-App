import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Comment } from "../api/CommentsApi";


interface Props{
    item: Comment;
    onPress: (item: Comment) => void;
}

const CommentItem: React.FC<Props> = React.memo(({item, onPress}) =>{
      return(
        <TouchableOpacity style={styles.card} onPress={()=>onPress(item)}> 
                <Text style={styles.name}><Text style={styles.head}>Name: </Text> {item.name}</Text>
                <Text style={styles.email}><Text style={styles.head}>Email: </Text> {item.email}</Text>
                <Text style={styles.body} numberOfLines={2}><Text style={styles.head}>Body: </Text> {item.body}</Text>
        </TouchableOpacity>
      )
})

export default CommentItem;


const styles = StyleSheet.create({
    card:{
        padding: 12,
        marginVertical: 6,
        backgroundColor:"rgb(118, 194, 26)",
        borderRadius: 8,
        elevation: 2,
    },
    head:{color:'white', fontWeight:'bold'},
    name:{fontWeight:'bold'},
    email:{color: 'gray', marginBottom: 4},
    body:{color: '#333'}
})