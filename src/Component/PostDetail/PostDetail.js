import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 240,
  },
});
  
  const PostDetail = () => {
    const classes = useStyles();

    const {postId} = useParams();
    
    const [post, setPost] = useState([]);
    
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res=> res.json())
    .then(data => setPost(data))
    },[])

    
    
    useEffect(() => {
        fetch(` https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(comment => setComments(comment))
        },[])

   

    
    return (
        <div>
        <Card className={classes.root}>
        <CardActionArea>
       
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        <h4>User Id : {post.userId}</h4>
        </Typography>
      
            <Typography gutterBottom variant="h5" component="h2">
            <h5>Id :{postId}</h5> 
            </Typography>
            
            <Typography variant="body2" color="textSecondary" component="p">
            <h2>Body : {post.body}</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardContent>
          <Typography variant="h5" gutterBottom>
          All Comments:
          </Typography>
          {
          comments.map(comment =><Comments comment={comment}></Comments> ) 
          }
        </CardContent>
                
            
          </Card>
              </div>

          

          );
      };

      export default PostDetail;



        