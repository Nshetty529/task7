// src/pages/ServiceDetails.js
import React from 'react';

const ServiceDetails = ({ service }) => (
  <div className="mt-4">
    <h3 className="text-secondary">Details about {service}</h3>
    <p className="lead">Here you can add specific information about {service} services offered by Innomatics Research Labs.</p>
  </div>
);

export default ServiceDetails;
