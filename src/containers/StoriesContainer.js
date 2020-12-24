import React, { useState, useEffect } from "react"
import { getStoryIds } from "../services/hacker-news-api"
import { Story } from "../components/Story.component"
import { GlobalStyle, StoriesContainerWrapper, StoryHeaders } from "../styles/StoryContainer.styles"


function StoriesContainer() {
  const [storyIds, setStoryIDs] = useState([])

  //everytime the component loads, retriev the new stories that were posted
  useEffect(() => {
    getStoryIds()
      .then(data => data && setStoryIDs(data))
  }, [])

  const getStories = storyIds.map(id => {
    return (
        <Story key={id} id={id} />
    )
  })

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <StoryHeaders>
          Hacker News 
        </StoryHeaders>
        
        {getStories}
      </StoriesContainerWrapper>

    </>
  )
}

export default StoriesContainer