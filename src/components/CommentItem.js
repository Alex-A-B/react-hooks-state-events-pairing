import Votes from "./Votes"

function CommentItem( { user, text } ) {
    return <div className="comment">
                <h3>{user}</h3>
                <p>{text}</p>
                <Votes upvotes={0} downvotes={0}/>
            </div>
}

export default CommentItem