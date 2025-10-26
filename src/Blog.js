import React from 'react';
import useScrollAnimation from './useScrollAnimation';
import blog1 from './assets/imgs/blog1.png';
import blog2 from './assets/imgs/blog2.png';
import blog3 from './assets/imgs/blog3.png';

function Blog() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section fade-in-section" id="blog" ref={sectionRef}>
      <div className="container">
        <h2 className="mb-5">Latest <span className="text-danger">News</span></h2>
        <div className="row">
          <div className="blog-card">
            <div className="img-holder">
              <img src={blog1} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            </div>
            <div className="content-holder">
              <h6 className="title">Tableau</h6>
              <p className="post-details">
                <a href="#">By: Admin</a>
                <a href="#"><i className="ti-heart text-danger"></i> 234</a>
                <a href="#"><i className="ti-comment"></i> 123</a>
              </p>
              <p>Visualizing chocolate data in Tableau enables insightful analysis through interactive dashboards, heatmaps, and bar charts. It helps uncover trends in flavors, ratings, and origins, enhancing data-driven decision-making.</p>
              <p><b>Interactive Chocolate Data Visualization in Tableau Insights</b></p>
              <p>Tableau helps visualize chocolate data through interactive charts, graphs, and maps. It enables trend analysis, brand comparisons, and insights into flavor preferences, making data exploration intuitive and visually compelling for better decision-making.</p>
              <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
            </div>
          </div>{/* end of blog wrapper */}

          {/* blog-card */}
          <div className="blog-card">
            <div className="img-holder">
              <img src={blog2} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            </div>
            <div className="content-holder">
              <h6 className="title">front-end</h6>
              <p className="post-details">
                <a href="#">By: Admin</a>
                <a href="#"><i className="ti-heart text-danger"></i> 456</a>
                <a href="#"><i className="ti-comment"></i> 264</a>
              </p>
              <p>Building my portfolio project, I will use HTML, CSS, and javascript bootstrap to create a responsive site. It will feature interactive animations, AI-driven insights, data visualizations, a blog, a contact form, and dark mode, showcasing my web development and data science skills.</p>
              <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
            </div>
          </div>{/* end of blog wrapper */}
          {/* blog-card */}
          <div className="blog-card">
            <div className="img-holder">
              <img src={blog3} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            </div>
            <div className="content-holder">
              <h4 className="title">Data Analyst</h4>
              <p className="post-details">
                <a href="#">By: Admin</a>
                <a href="#"><i className="ti-heart text-danger"></i> 431</a>
                <a href="#"><i className="ti-comment"></i> 312</a>
              </p>
              <p> I analyze Google Form responses using Pandas by loading the CSV file, cleaning data, and performing exploratory analysis. Using groupby(), value_counts(), and visualizations with Matplotlib and Seaborn, I will extract insights, identify trends, and summarize key findings effectively. </p>
              <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
            </div>
          </div>{/* end of blog wrapper */}
        </div>
      </div>
    </section>
  );
}

export default Blog;
