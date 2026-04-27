import React, {useCallback} from "react";
import { FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator"; 
import { useComments } from "../hooks/useComments";
import CommentItem from "../Components/Commentsitem";
import Loader from "../Components/Loader";
import ErrorView from "../Components/ErrorView";
import { Comment } from "../api/CommentsApi";


type Props = NativeStackScreenProps<RootStackParamList, "Comments">;

const CommentsList: React.FC<Props> = ({navigation}) =>{
     const { comments, loading, initialLoading, error, loadMore} = useComments();

     const handlePress = useCallback(
        (item: Comment) =>{
            navigation.navigate("Detail", item);
        }, [navigation]
     );

     if(initialLoading) return <Loader/>

     if(error) return <ErrorView message={error} onRetry={loadMore}/>;

     return(
        <FlatList data={comments} keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) =>(
            <CommentItem item={item} onPress={handlePress}/>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading? <Loader/>: null}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews/>
     )
}

export default CommentsList;