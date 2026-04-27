import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommentsList from "../screens/CommentsList"
import CommentDetail from "../screens/CommentDetail";

export type RootStackParamList = {
    Comments: undefined;
    Detail:{
        id: number;
        name: string;
        email: string;
        body: string;
        postId:number;
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () =>{
      return(
        <Stack.Navigator>
              <Stack.Screen name = "Comments" component={CommentsList} />
              <Stack.Screen name = "Detail" component={CommentDetail} options={({route}) =>({title: route.params.name,})}/>
        </Stack.Navigator>
      )
}

export default AppNavigator;