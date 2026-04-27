import {useState, useEffect, useCallback} from 'react';
import { fetchComments, Comment } from '../api/CommentsApi';

export const useComments = () =>{
    const [comments, setComments] = useState<Comment[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [initialLoading, setInitialLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const loadMore = useCallback(async() =>{
        if(loading || !hasMore) return;

        setLoading(true);
        try{
            const data = await fetchComments(page);
            
            if(data.length ===0){
             setHasMore(false);
            }else{
                setComments(prev => [...prev, ...data]);
                setPage(prev => prev+1);
            }
        }catch(err){
            setError("FAILED TO LOAD COMMENTS")
        }finally{
            setLoading(false);
            setInitialLoading(false);
        }
    }, [page, loading, hasMore]);

    useEffect(()=>{
        loadMore();
    }, []);

    return{ comments, loading, initialLoading, error, loadMore };
};

