import React from 'react';
import useScrollAnimation from './useScrollAnimation';
import blog1 from './assets/imgs/blog1.png';
import blog2 from './assets/imgs/blog2.png';
import blog3 from './assets/imgs/blog3.png';
import blog4 from './assets/imgs/blog4.jpg';

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
              <h6 className="title">ML</h6>
              <p className="post-details">
                <a href="#">By: Admin</a>
                <a href="#"><i className="ti-heart text-danger"></i> 456</a>
                <a href="#"><i className="ti-comment"></i> 264</a>
              </p>
              <p>Developed a robust machine learning model to automatically classify text data into relevant categories. This project involved preparing and cleaning a real-world dataset, experimenting with feature extraction techniques, and training algorithms such as logistic regression and neural networks for accurate text labeling. Key outcomes included building a pipeline for data preprocessing, model evaluation, and achieving strong results on validation data. The project demonstrates skills in Python, machine learning, and practical problem solving for natural language processing tasks.

</p>
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
          {/* blog-card */}
          <div className="blog-card">
            <div className="img-holder">
              <img src={blog4} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            </div>
            <div className="content-holder">
              <h6 className="title">RAG</h6>
              <p className="post-details">
                <a href="#">By: Admin</a>
                <a href="#"><i className="ti-heart text-danger"></i> 456</a>
                <a href="#"><i className="ti-comment"></i> 264</a>
              </p>
              <p>Participated in an international hackathon where our team developed an intelligent chatbot powered by Retrieval-Augmented Generation (RAG) techniques. The project aimed to deliver fast, context-aware responses by integrating state-of-the-art NLP models and custom data sources. Although we did not win a prize, the experience was invaluable—helping us build new technical skills, apply advanced concepts like RAG in real-world scenarios, and strengthen teamwork and project management abilities.

</p>
              <a href="#" className="read-more">Read more <i className="ti-angle-double-right"></i></a>
            </div>
          </div>{/* end of blog wrapper */}
        </div>
      </div>
    </section>
  );
}

export default Blog;
