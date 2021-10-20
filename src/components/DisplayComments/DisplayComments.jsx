import React from 'react';

const DisplayComments = (props) => {
    console.log(props.comments);
    return (
        <div>
                {console.log(props.videoSrc)}
            <table>
                <thead>
                    <tr>
                        <th> Comments </th>
                    </tr>
                </thead>
                <tbody>
                    {props.comments.map((comment) => {
                        return (
                            <tr key={comment.id}>
                                <td>{comment.body}</td>
                                <td><button href = "#" className = "btn btn-outline-success button-row" onClick={() => props} >Like</button></td>
                                <td><button href = "#" className = "btn btn-outline-danger button-row" onClick={() => props} >Dislike</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayComments;