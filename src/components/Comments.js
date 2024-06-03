import React, { useState } from 'react';
import './Comments.css';

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="comment-section mt-4">
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <input 
            type="text" 
            className="form-control mb-2" 
            placeholder="Join the discussion and leave a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAddComment}>Submit</button>
        </div>
      </div>
      <div className="comments mt-3">
        {comments.map((comment, index) => (
          <div key={index} className="comment">{comment}</div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
