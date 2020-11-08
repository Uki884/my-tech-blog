import * as React from 'react';
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../../utils/typography"
import BaseCard from '../Molecules/BaseCard'

const _Article = styled.article`
    position: relative;
    height: 100%;
`

const _ArticleBody = styled.div`
    padding: 8px;
`
const _ArticleFooter = styled.div`
    position: absolute;
    bottom: 8px;
    color: #B7B7B7;
    font-size: 14px;
`

const _ArticleTitle = styled.div`
    font-weight: bold;
    font-size: 16px;
    color: #B7B7B7;
`

const Article = (props: any) => {
    const { title, date, path, image } = props
    return (
    <BaseCard>
        <_Article>
            <Image fluid={image} />
            <_ArticleBody>
                <_ArticleTitle>
                    { title }
                </_ArticleTitle>
                <_ArticleFooter>
                    {date}
                </_ArticleFooter>
                </_ArticleBody>
        </_Article>
    </BaseCard>
    )
}

export default Article
