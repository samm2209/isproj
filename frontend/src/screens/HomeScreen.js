import React, { useEffect } from 'react';
import Project from '../components/Project';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProjects } from '../actions/projectActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList)
  const { loading, error, projects } = projectList; 

  useEffect(() => {
      dispatch(listProjects());
  }, [dispatch]);
  return (
    <div>
      {loading ? <LoadingBox></LoadingBox>
        :
        error ? <MessageBox variant="danger">{error}</MessageBox>
          :
          <>
            <div className="header">
              <div>
                <img src="https://img.freepik.com/free-vector/employees-giving-hands-helping-colleagues-walk-upstairs_74855-5236.jpg?size=626&ext=jpg" alt="banner_img"
                  width="600px" height="350px"
                ></img>
              </div>
              <div className="banner-text">
                <span className="light">Make a donation,</span><span className="green"> support a cause</span>
                <p>JiFund let's you contribute and invest with as little as <span className="notlight">1000 bob</span>
                  . Change a life today.</p>
                <button className="primary">Discover a campaign</button>
              </div>
            </div>

            <div className="content">
              <div>
                <h1>Ongoing campaigns you might want to see </h1>
              </div>
            </div>

            <section className="cards-wrapper">
              {
                projects.map((project) => (
                  <Project key={project._id} project={project}></Project>
                ))
              }
            </section>

            <form action="">
              <div className="container">
                <div className="sub-text">
                  <h2 className="">Get the latest updates</h2>
                  <p>Subscribe to our newsletter</p>
                </div>
                <div className="">
                  <input type="text" placeholder="Name" name="name" required />
                  <input type="text" placeholder="Email" name="email" required />
                </div>
                <label>
                  <input type="checkbox" checked="unchecked" name="subscribe" />Weekly newsletter
                </label>
                <div className="">
                  <input type="submit" value="Subscribe" />
                </div>
              </div>
            </form>
          </>
      }
    </div>
  )
}
