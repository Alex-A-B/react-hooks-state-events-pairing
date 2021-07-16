import { useState } from "react"
import Votes from "./Votes"
import DisplayComments from "./DisplayComments"

function DisplayVideo({ video }) {
    const [showComments, setShowComments] = useState(true)

    const handleCommentClick = () => setShowComments(!showComments)
    

    return (
        <div className="video">
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <h1 className="title">{video.title}</h1>
            <span>{video.views} Views | Uploaded {video.createdAt}</span>
            <Votes video={video} />
            <button className="showHideComments" onClick={handleCommentClick}>{showComments ? "Hide" : "Show" } Comments</button>
            {showComments ? <DisplayComments comments={video.comments}/> : null}
        </div>
    )    
        
}

export default DisplayVideo