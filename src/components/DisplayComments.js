import CommentItem from "./CommentItem";

function DisplayComments( { comments }) {
    return (
        <div className="comments">
            <hr width="75%" align="center" />
            <h2>{comments.length} Comments</h2>
            {comments.map((comment) => <CommentItem key={comment.id} user={comment.user} text={comment.comment}/>)}
        </div>
    )
}

export default DisplayComments