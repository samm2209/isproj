import React from 'react'
import data from '../data'

export default function ProjectScreen(props) {
    const project = data.projects.find( x => x._id === props.match.params.id);
    if(!project) {
      return <div>Product Not Found</div>;
    }

    return (
      <div>
        <div className="name">
          <h1>{project.name}</h1>
        </div>
        
        <div className="project">
          <div className="left">
            <div className="display">
              <img className="large" src={project.image} alt={project.name}></img>
            </div>
            <div className="description">
              <div className="who">
                <p>{project.organiser} is organising this fundraiser.</p>
              </div>
              <div className="story">
                <p>{project.description}</p>
              </div>
            </div>
                         
          </div>
          
          <div className="sidebar">
            <div className="report">
                <h2>Ksh{project.raised} <span>raised of Ksh{project.goal} goal</span></h2>
            </div>
            <div className="mation">
                <div className="info">
                    <p><a href="">{project.contribution}</a></p>
                    <span>donors</span>
                </div>
                <div className="info">
                    <p><a href="">{project.shares}</a></p>
                    <span>shares</span>
                </div>
                <div className="info">
                    <p><a href="">{project.followers}</a></p>
                    <span>followers</span>
                </div>
            </div>
            <div>
                <button className="coprimary proj">Share</button>
                <button className="primary proj">Support campaign</button>
            </div>
            
          </div>
        </div>
      </div>
    )
}
