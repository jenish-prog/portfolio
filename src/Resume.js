
import React, { useRef } from 'react';
import useValueAnimation from './useValueAnimation';
import useScrollAnimation from './useScrollAnimation';

function Resume() {
  const sectionRef = useScrollAnimation();
  const htmlCssBootstrap = useValueAnimation(sectionRef, 97, 2000);
  const python = useValueAnimation(sectionRef, 85, 2000);
  const sql = useValueAnimation(sectionRef, 80, 2000);
  const tableau = useValueAnimation(sectionRef, 90, 2000);
  const english = useValueAnimation(sectionRef, 80, 2000);
  const tamil = useValueAnimation(sectionRef, 45, 2000);

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
                <p>Web Developer</p>
                <p className="subtitle">Build modern and responsive web applications, collaborate on GitHub, and gain hands-on experience by joining internships and contributing to real-world projects.</p>
                <hr />
                <p>AI/ML Engineer</p>
                <p className="subtitle">Apply advanced machine learning and AI techniques to solve complex problems, analyze datasets, participate in Kaggle competitions, and create innovative solutions for industry challenges.</p>
                <hr />
                <p>Data Analyst</p>
                <p className="subtitle">Transform raw data into actionable insights, visualize information using dashboards, and support data-driven decision-making through analytic projects and certifications.</p>
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
                <h6>React & JavaScript</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${htmlCssBootstrap}%` }} aria-valuenow={htmlCssBootstrap} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Python</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${python}%` }} aria-valuenow={python} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>SQL</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${sql}%` }} aria-valuenow={sql} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Machine Learning & Deep Learning</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${tableau}%` }} aria-valuenow={tableau} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>SQL</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${sql}%` }} aria-valuenow={sql} aria-valuemin="0" aria-valuemax="100"></div>
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
              <div className="card-body pb-3">
                <h6>English</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${english}%` }} aria-valuenow={english} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Spainsh</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${english}%` }} aria-valuenow={english} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Tamil</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${tamil}%` }} aria-valuenow={tamil} aria-valuemin="0" aria-valuemax="100"></div>
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
