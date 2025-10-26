
import React from 'react';
import useScrollAnimation from './useScrollAnimation';

function Resume() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section fade-in-section" id="resume" ref={sectionRef}>
      <div className="container">
        <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2">
                  <h4>Expertise</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">NULL</h6>
                <p>Data Analyst</p>
                <p className="subtitle">Build projects, join internships, compete in Kaggle, get certifications, contribute to GitHub, analyze public datasets, and create dashboards for experience.</p>
                <hr />
                <h6 className="title text-danger">NULL</h6>
                <p>Front-end Developer</p>
                <p className="subtitle">Build projects, join internships, compete in Kaggle, get certifications, contribute to GitHub, analyze public datasets, and create dashboards for experience.</p>
                <hr />
                <h6 className="title text-danger">NULL</h6>
                <p>Data Scientist</p>
                <p className="subtitle">Build projects, join internships, compete in Kaggle, get certifications, contribute to GitHub, analyze public datasets, and create dashboards for experience.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2">
                  <h4>Education</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">2023 - 2027</h6>
                <p>B.Tech Artificial Intelligence and Data Scientist</p>
                <p className="subtitle">B.Tech in Artificial Intelligence and Data Science – Specialized in AI, Machine Learning, and Data Analytics, with expertise in Python, Deep Learning, and Big Data.</p>
                <hr />
                <h6 className="title text-danger">2022 - 2023</h6>
                <p>High School Degree</p>
                <p className="subtitle">Completed with a strong foundation in Mathematics, Physics, and Computer Science, focusing on problem-solving, logical reasoning, and analytical skills essential for AI and Data Science. Developed expertise in programming, statistics, and data interpretation, preparing for advanced studies in Artificial Intelligence, Machine Learning, and Data Analytics.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Skills</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>HTML,CSS &amp; Bootstrap</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '97%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Python</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>SQL</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Tableau</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Languages</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>English</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Tamil</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '45%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
