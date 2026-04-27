import axios from "axios";

export interface Comment {
    id:number;
    email:string;
    name:string;
    body:string;
    postId: number
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchComments = async (page: number): Promise<Comment[]>=>{
    const res = await axios.get(
        `${BASE_URL}/comments?_page=${page}&_limit=10`
    );
    
    return res.data;
}