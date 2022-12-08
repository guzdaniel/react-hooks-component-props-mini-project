import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {

    let emojiType = ""

    function roundReadTime(x){
        if(x < 30){
            emojiType = "☕️"
            return  Math.ceil(x/5);
        }
        else{
            emojiType = "🍱"
            return  Math.ceil(x/10);
        }
    }

    const articles = posts.map((p) => {
        return (
            <Article key={p.id} title={p.title} date={p.date} preview={p.preview} 
            emojiTimes={roundReadTime(p.minutes)} emojiType={emojiType}/>
        )
    })

   

    return (
        <div>
            {articles}
        </div>
    )

}

export default ArticleList