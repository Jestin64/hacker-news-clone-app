import styled from "styled-components"

export const StoryWrapper = styled.section`
    display: block;
    text-align: -webkit-left;

    padding-top: 10px;
    margin-bottom: 20px;
    padding-left: 5%;
    border-top: 2px solid #cccccc !important;

    &:first-of-type {
        border-top: 0;
    }

    &:last-of-type {
        border-bottom:0;
        padding-bottom:0p;
    }
`

export const StoryTitle = styled.h1`
    margin-bottom: 5px;
    font-size: 10pt;
    line-height: 1.8;
    margin: 0;
    text-decoration: none;

    a {  
        color: #828282;
        text-decoration: none;
    }
    a:link{
        color: #000000;
    }
`

export const StoryMeta = styled.div`
    font-style: italic;

    > span:first-child {
        margin-right: 10px;
    }

    > span:not(:first-child):before{
        margin: 0 7px;
    }

    .story_meta-bold{
        font-weight: bold;
    }
`

export const StoryMetaElement = styled.span`
    font-weight: bold;
    color: ${props => props.color || 'red'}
`

