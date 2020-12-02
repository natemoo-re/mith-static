import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './person.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Person = ({ pageContext: person }) => {
  const name = person.name
  const photo = person.headshot 
    ? <Img 
      fluid={person.headshot.localFiles[0].childImageSharp.fluid} 
      alt={`Headshot of ${person.name}`} 
      className="col-4 col-4-lg col-4-md col-5-sm col-6-xs headshot"
      imgStyle={{
        objectFit: "cover",
      }}
      />
    : ''
  const iconEmail = <FontAwesomeIcon icon="envelope" />
  const email = person.email
    ? <span className="meta email">
        {iconEmail} 
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </span> : ''
  const iconPhone = <FontAwesomeIcon icon="mobile-alt" />
  const phone = person.phone
    ? <span className="meta phone">
        {iconPhone}
        {person.phone}
      </span> : ''
  const iconWeb = <FontAwesomeIcon icon="globe" />
  const website = person.website
    ? <span className="meta website">
        {iconWeb}
        <a href={person.website}>{person.website}</a>
      </span> : ''
  const iconTwitter = <FontAwesomeIcon icon={['fab', 'twitter']} />
  const twitter = person.twitter
    ? <span className="meta twitter">
        {iconTwitter}
        <a href={`https://twitter.com/${person.twitter}`}>{person.twitter}</a>
      </span> : ''
  const bio = person.bio
    ? <div className='col-12' dangerouslySetInnerHTML={{ __html: person.bio.childMarkdownRemark.html }} /> : ''

  return (
    <Layout>
      <SEO title={name} />
      <div className="page-person">
      <section className="person">
        <h1>{name}</h1>
        {photo}
        <div>
          <h2 className="title">{person.title}</h2>
          <div className="metadata">
            {email} {phone} {website} {twitter}
          </div>
        </div>
        {bio}
      </section>
      </div>
    </Layout>
  )
}

export default Person
