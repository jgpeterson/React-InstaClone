import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';

const Img = styled.div`
text-align: center;
   display: inline-block;
   width:85%;
   background: white;
   border: 1px solid #B9D6C2 ;
   margin-bottom: 8px;
   margin-right: 8px;
   margin-left: 170px;
   border-radius: 50px;
   padding: 2em;
   position: relative;
   min-width: 340px;
   max-width:800px;
   `
const User = styled.div`
text-align: left;
display: flex;
justify-content: flex-start`

class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <Img>
        <User>
          <div>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
          </div>
        </User>
        <div>
          <img src={post.image.url} />
          <p>{post.caption}</p>
        </div>
        <div>
          <FaHeartO />
          <FaCommentO />
        </div>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
      </Img>
    )
  }
}

export default Post;