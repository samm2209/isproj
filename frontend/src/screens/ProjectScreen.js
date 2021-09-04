import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { detailsProject } from '../actions/projectActions';


export default function ProjectScreen(props) {
  const dispatch = useDispatch();
  const projectId = props.match.params.id;
  const projectDetails = useSelector(state => state.projectDetails);
  const { loading, error, project } = projectDetails;

  useEffect(() => {
    dispatch(detailsProject(projectId))
  }, [dispatch, projectId])

  return (
    <div>
      {loading ? <LoadingBox></LoadingBox>
        :
        error ? <MessageBox variant="danger">{error}</MessageBox>
          :
          <>
            <div>
              <Link to="/">Back to home</Link>
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
          </>
      }
    </div>



  )
}
