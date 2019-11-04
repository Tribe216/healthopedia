import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SanitizedHTML from 'react-sanitized-html';
import { groupResourcesByCategory } from 'utilities/helpers.js';
import ReadMore from 'components/common/ReadMore';

const Resource = ({resource}) => {
  return (
    <ResourceStyles>
      <h2>{resource.Title}</h2>
      <ReadMore>
        <img src={resource.ImageUrl} alt={resource.ImageAlt}/>
        {
          resource.Sections && resource.Sections.Section.map( (section ,i) => (
            <div key={i}>
              <h4>{section.Title}</h4>
              <h6>{section.Description}</h6>
              <SanitizedHTML html={ section.Content } />
            </div>
          ))
        }
      </ReadMore>
    </ResourceStyles>
  )
}

const ResourceGroup = ({group}) => {
  return (
    <ResourceGroupStyles>
      <div>
        <h1>
          <SanitizedHTML html={group.title} />
        </h1>
      </div>
      <div>
        {
          group.data.map( resource => (
            <Resource
              key={resource.Id}
              resource={resource} 
            />
          ))
        }
      </div>
    </ResourceGroupStyles>
  )
}

const DemoResults = ({data}) => {
  let resources = data.Result.Resources;
  let resourcesByGroup = groupResourcesByCategory(resources);

  return (
    <div>
      <div>
        {
          resourcesByGroup.map( group => (
            <ResourceGroup
              key={group.title}
              group={group} 
            />
          ))
        }
      </div>
    </div>
  )
}

const ResourceGroupStyles = styled.div`
  margin-top: 2rem;
`

const ResourceStyles = styled.section`
  padding: 1.5rem 0;
`

DemoResults.propTypes = {
  data: PropTypes.object
};

export default DemoResults;