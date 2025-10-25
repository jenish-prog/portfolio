
import React from 'react';

function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <p className="small mb-0 text-light">
          &copy; <script>document.write(new Date().getFullYear())</script> Created With <i className="ti-heart text-danger"></i> By <a href="http://devcrud.com" target="_blank"><span className="text-danger" title="Bootstrap 4 Themes and Dashboards">Jenish-prog</span></a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
