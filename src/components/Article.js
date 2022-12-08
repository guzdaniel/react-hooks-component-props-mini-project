import React from "react";


function Article( { title, date="January 1, 1970", preview, emojiTimes, emojiType} ){
    
    return (
        <article>
            <h3> {title} </h3>
            <small>{date}</small>
            <p>{preview}</p>
            <span>{emojiType.repeat(emojiTimes)}</span>
        </article>
    )

}

export default Article