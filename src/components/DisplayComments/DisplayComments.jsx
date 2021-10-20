import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import './DisplayComments.css' 


const DisplayComments = (props) => {
    console.log(props.comments , props.videoSrc);

    useEffect(()=> {
        props.getAllComments(props.videoSrc)
    }, [props.getAllComments, props.videoSrc, props.commen])

    return (
        <div className = "table-responsive">
            <br/>
            <h3>Comments</h3>    
        
            <table className="table">
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {props.comments.map((comment) => {
                        return (
                            <tr key={comment.id}>
                                <td className="td">{comment.body}</td>
                                <td className="buttonCenter"><button href = "#" className = "btn btn-outline-success button-row" onClick={() => props} >Like</button></td>
                                <td className="buttonCenter"><button href = "#" className = "btn btn-outline-danger button-row" onClick={() => props} >Dislike</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayComments;