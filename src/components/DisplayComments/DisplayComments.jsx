import React from 'react';

const DisplayComments = (props) => {
    return (
        <div>
            <p>{props.getAllComments}</p>
            {console.log(props.getAllComments)}
            <button type="submit">Like Comment</button>
            <button type="submit">Dislike Comment</button>
        </div>
      );
}
 
export default DisplayComments;