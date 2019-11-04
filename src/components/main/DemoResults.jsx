import React from 'react';

const Resource = (resource) => {
  return (
    <section>
      <img src={resource.resource.ImageUrl} alt={resource.resource.ImageAlt}/>
      <h2>{resource.resource.Title}</h2>
      {
        resource.resource.Sections.Section.map( section => (
          <div key={section.Title}>
            <h4>{section.Title}</h4>
            <h6>{section.Description}</h6>
            <div
              dangerouslySetInnerHTML={{__html: section.Content}}
            />
          </div>
        ))
      }
    </section>
  )
}

const DemoResults = ({data}) => {
  console.log(data);
  window.demoData = data;
  let resources = data.Result.Resources.All.Resource;
  return (
    <div>
    <h4 dangerouslySetInnerHTML={{__html: data.Result.MyHFHeading}}/>
    <div>
      {
        resources.map( resource => (
          <Resource
            key={resource.Id}
            resource={resource} 
          />
        ))
      }
    </div>
    ></div>
  )
}

export default DemoResults;