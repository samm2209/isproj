import React from 'react';

export default function Project(props) {
    const { project } = props;
    return (
        <div key={project._id} className="card-grid-space">
                <a className="card" href={`/project/${project._id}`}>
                  <div>
                    <h2>{project.name}</h2>
                    <p>
                      {project.description}
                    </p>
                    <div className="dets">
                      <div className="date">{project.date}</div>
                      <div className="tags">
                        <div className="tag">{project.category}</div>
                      </div>
                    </div>
                    <div className="dets">
                      <div className="trend">{project.progress}% funded</div>
                      <div className="tags">
                        <div className="amount">{project.contribution} contributions</div>
                      </div>
                    </div>
                  </div>
                </a>
        </div>
    );
}
