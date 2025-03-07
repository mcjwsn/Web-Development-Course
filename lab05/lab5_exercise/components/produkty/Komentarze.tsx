import React, { useEffect, useState } from 'react';
import Komentarz from './Komentarz';

interface user{
    id : number,
    username : string,
    fullName : string
}

interface kom
 {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: user;
}

function Komentarze()
{
    const [com, setComments] = useState<kom[]>([]);
    
    useEffect(() => {
        fetch("https://dummyjson.com/comments")
            .then((response) => response.json())
            .then((data) =>{
                setComments(data.comments)
            })
    });

    return(
        <div>
            {com.map((comment) => (
            <Komentarz
            key={comment.id}
            id={comment.id}
            body={comment.body}
            postId={comment.postId}
            likes={comment.likes}
            user={comment.user}
            />
            ))}
        </div>
    );
};

export default Komentarze;