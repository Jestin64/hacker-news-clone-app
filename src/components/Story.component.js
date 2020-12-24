import React, {useState, useEffect} from "react"
import {getStory} from "../services/hacker-news-api"
import {StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement} from '../styles/Story.styles'



export const Story = ({id})=>{
    const [story, setStory] = useState({})

    useEffect(()=>{
        getStory(id).then(data => data && data.url && setStory(data))
    }, [])

    return(
        <div>
        {   
            story && story.id ?
            (
                <StoryWrapper>  

                    <StoryTitle>
                        <a href={story.url}> {story.title} </a>  
                    </StoryTitle> 

                    <StoryMeta >
                        <span className="story__by">
                            <StoryMetaElement color="#000">by:</StoryMetaElement>{story.by}
                        </span>
                        <span className="story__time">
                            <StoryMetaElement color="#000">posted:</StoryMetaElement>{` `}
                            {story.time}
                        </span>
                    </StoryMeta>
                    
                </StoryWrapper>
            )
            : null
        }
        </div>
    )
}