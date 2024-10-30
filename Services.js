// src/pages/Services.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => (
  <div className="container my-5">
    <h2 className="text-primary">Our Services</h2>
    <div className="list-group my-3">
      <Link to="consulting" className="list-group-item list-group-item-action">Consulting</Link>
      <Link to="analytics" className="list-group-item list-group-item-action">Analytics</Link>
      <Link to="development" className="list-group-item list-group-item-action">Development</Link>
    </div>
    <Outlet />
  </div>
);

export default Services;
