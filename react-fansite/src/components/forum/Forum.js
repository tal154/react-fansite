import ForumForm from "./ForumForm";
import ForumPostList from "./ForumPostList";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Forum(){

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("http://localhost:8080/forum");
        if (response.ok) {
            setPosts(await response.json());
        } else {
            setPosts([]);
        }
    };
   
    useEffect(() => {

        fetchPosts();
    }, []);


    return (
        <>
            <h1>Ye Olde Forum</h1>
            <ForumForm fetchPosts={fetchPosts}/>
            <ForumPostList posts={posts} />
        </>
        
    );
}