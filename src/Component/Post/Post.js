import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles({
    title: {
      fontSize: 30,
    },
});
  
const Post = (props) => {
  const postStyle = {
    border: '2px solid secondary',
    margin: '25px',        
    padding: '25px',
    borderRadius: '25px',
}
const {title, id} = props.post ;
const history = useHistory();
// const {userId, body, title, id} = props.post ;
// const history = useHistory();

const handleClick = (postId) =>{
    history.push(`/post/${postId}`)
}
// const handleClick = {postId} => {
// //     const url = `/post/${postId}`;
// //     history.push( url );

// // }
const classes = useStyles();

    return (
      
    <div style={postStyle}>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          ID : {id}
          <br/>
          {/* <Link to = {`/post/${id}` }> click </Link>  */}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
          <br/>
          {/* <Link to = {`/post/${id}` }> click </Link>  */}
        </Typography>
     </CardContent>
      <CardActions>
        <Button onClick={()=>handleClick(id)  }
        size="small" variant="contained" color="primary">Read More</Button>
      </CardActions>
    </Card>

</div>
);
};

export default Post;










