import React from 'react'
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Paginator from '../components/paginator'
import ResearchTime from '../components/research-time'

import './post-index.css'

const ResearchIndex = ({data}) => {
  const items = data.allResearchJson.nodes
  const pageCount = data.allResearchJson.pageInfo.pageCount

  return (
    <Layout>
      <SEO title="MITH Research" />
      <div className="page-research">
        <section className="posts research">
          <h1 className="page-title">Research</h1>
          {items.map(item => {
            const slug = '/research/' + item.slug + '/'
            const active = item.active === 'TRUE' ? <span className="pill">Active</span> : ''
            const started = item.year_start ? <span><time>{item.year_start}</time></span> : ''
            const ended = item.year_end ? <span> &ndash; <time>{item.year_end}</time></span> : ''
            let excerpt = ''

            if (item.fields) {
              excerpt = item.fields.markdownDescription
                ? item.fields.markdownDescription.childMarkdownRemark.excerpt
                : ''
            }

            return (
              <article className="post research-item-post" key={`research-${item.id}`}>
                <h2 className="title">
                  <Link to={slug}>{item.title}</Link>
                </h2>
                <div className="meta">
                  {active} {started}{ended}
                </div>
                <div className="post-excerpt">
                  {excerpt}
                </div>
              </article>
            )
          })}
        </section>
        <Paginator count={pageCount} path="research" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ResearchQuery($skip: Int!, $limit: Int!) {
    allResearchJson(
      limit: $limit
      skip: $skip
      sort: {
        fields: [active, slug], 
        order: [DESC, ASC]
      }
    ) {
      nodes{
        title
        slug
        year_start
        month_start
        year_end
        month_end
        active
        fields {
          markdownDescription {
            childMarkdownRemark {
                excerpt(pruneLength: 250)
              }
          }
        }
      }
      pageInfo {
        pageCount
      }
    }
  }
`
 
export default ResearchIndex
