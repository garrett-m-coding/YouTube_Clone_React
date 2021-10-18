import React from 'react';
import DisplayComments from '../DisplayComments/DisplayComments';
import AddComment from '../AddComment/AddComment';


const Comments = (props) => {
  return (
    <div>
      <AddComment addComment={props.addComment}/>
      <DisplayComments getAllComments={props.getAllComments}/>
    </div>
    );
}
 
export default Comments;