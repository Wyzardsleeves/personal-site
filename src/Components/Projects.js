import React from 'react';
import '../assets/styles/projects.css';
import projectList from './ProjectList';

const Projects = () => {
  return(
    <div className="project-stuff container">
      <div className="project-head">
        <h4>Projects</h4>
      </div>
      {projectList.map((proj) =>
        <div className="project-list">
          <table className="card-panel grey-lighten-4">
            <tbody>
              <a target="_blank" href={proj.projectURL}>
                <tr>
                  <td width="30%" className="project-thumb">
                    <img src={proj.imgURL} alt="project.png" />
                  </td>
                  <td width="70%">
                    <h5>{proj.title}</h5>
                    <p>{proj.description}</p>
                  </td>
                </tr>
              </a>
          </tbody>
        </table>
      </div>
    )}

    </div>
  )
}

export default Projects;
