import { useState } from "react";

function Votes({ upvotes, downvotes }) {
    const [upvoteNum, setUpvoteNum] = useState(upvotes)
    const [downvoteNum, setDownvoteNum] = useState(downvotes)

    const handleUpvote = () => setUpvoteNum(upvoteNum + 1)
    
    const handleDownvote = () => setDownvoteNum(downvoteNum + 1)
    
    return (
        <div className="votes">
            <button className="upvotes" onClick={handleUpvote}>{upvoteNum} 👍</button><button className="downvotes" onClick={handleDownvote}>{downvoteNum} 👎</button>
        </div>
    )
}

export default Votes