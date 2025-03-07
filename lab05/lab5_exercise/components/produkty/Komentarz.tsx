import React, { useState } from 'react'

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

function Komentarz({id,body,postId,likes,user}:kom)
{
    const [likesCounter,setLikes] = useState(likes);

    function changeLikes(){
        setLikes((prev: number)=>prev+1);
    }
    function changeDisLikes(){
        setLikes((prev:number)=> prev > 0 ? prev-1 : 0);
    }

    return(
        <div style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '5px' }}>
            <div style = {{backgroundColor: 'green'}}>
            <div >
                <h5>{user.fullName}</h5>
            </div>
            <div style={{padding: '10px', backgroundColor:'purple'}}>{body}</div>
            <div style ={{backgroundColor: 'pink'}}>
                <span style={{padding:'10px'}}>Liczba lajkow : {likesCounter}</span>
                <button style ={{background: 'linear-gradient(90deg, #4caf50, #81c784)',
  padding: '12px 12px', border:'None'}} onClick={changeLikes}>👍</button>
                <button style ={{backgroundColor: 'red',
  padding: '12px 12px', border:'None'}} onClick={changeDisLikes}>👎</button>
            </div>
            </div>
        </div>
    );
};

export default Komentarz;