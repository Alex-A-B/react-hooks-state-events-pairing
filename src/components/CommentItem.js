function CommentItem( { user, text } ) {
    return <div className="comment">
                <h3>{user}</h3>
                <p>{text}</p>
            </div>
}

export default CommentItem