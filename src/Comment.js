//your code here
import React, {Component} from 'react';

//Comment is inside BlogPost render, so it takes any properties, i.e. the comments array, because commentText=comments[]
class Comment extends Component {
    render() {
      return (
        <div className="comment">
          {this.props.commentText}
        </div>
      )
    }
  }

  export default Comment;