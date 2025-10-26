import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/contact', formData)
      .then(response => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        setStatus('Something went wrong. Please try again.');
      });
  };

  useEffect(() => {
    const loadGoogleMapsScript = async () => {
      if (window.google && window.google.maps) {
        // Google Maps script is already loaded
        return;
      }

      if (window.googleMapsScriptLoading) {
        // Script is already being loaded
        return;
      }

      window.googleMapsScriptLoading = true;

      try {
        const response = await axios.get('http://localhost:3001/api/maps-api-key');
        const { apiKey } = response.data;

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.loading = 'async';
        script.async = true;
        script.defer = true;
        window.initMap = () => {
          // Styles a map in night mode.
          new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.674, lng: -73.945 },
            zoom: 12,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            styles: [
              { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
              { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
              { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
              }
            ]
          });
          window.googleMapsScriptLoading = false;
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading Google Maps script:', error);
        window.googleMapsScriptLoading = false;
      }

      return () => {
        // Clean up the script when the component unmounts
        const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
        delete window.initMap;
        delete window.googleMapsScriptLoading;
      };
    };

    loadGoogleMapsScript();
  }, []);

  return (
    <div className="section contact" id="contact">
      <div id="map" className="map"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-card">
              <h4 className="contact-title">Send a message</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Name *" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="Email *" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Message *" rows="7" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group ">
                  <button type="submit" className="form-control btn btn-primary">Send Message</button>
                </div>
              </form>
              {status && <p>{status}</p>}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-info-card">
              <h4 className="contact-title">Get in touch</h4>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-mobile icon-md"></i>
                </div>
                <div className="col-10 ">
                  <h6 className="d-inline">Phone : <br /> <span className="text-muted">+ (91) 7845742951</span></h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-map-alt icon-md"></i>
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Address :<br /> <span className="text-muted">Kariyavilai,Mondaikade(post)</span></h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-envelope icon-md"></i>
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Email :<br /> <span className="text-muted">jenish112005@gmail.com</span></h6>
                </div>
              </div>
              <ul className="social-icons pt-4">
                <li className="social-item"><a className="social-link text-dark" href="https://www.instagram.com/jen_is_h_/"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                <li className="social-item"><a className="social-link text-dark" href="https://www.linkedin.com/in/jenish-s-4aa3692b5/"><i className="ti-linkedin" aria-hidden="true"></i></a></li>
                <li className="social-item"><a className="social-link text-dark" href="https://github.com/jenish-prog"><i className="ti-github" aria-hidden="true"></i></a></li>
                <li className="social-item"><a className="social-link text-dark" href="https://www.youtube.com/@WhatHappen_jp"><i className="ti-youtube" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
