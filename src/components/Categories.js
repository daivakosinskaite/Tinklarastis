import React from 'react';

function Categories() {
  return (
    <div className="card mb-4">
      <h5 className="card-header">Categories</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-primary">Web Design</a></li>
              <li><a href="#!" className="text-primary">HTML</a></li>
              <li><a href="#!" className="text-primary">Freebies</a></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-primary">JavaScript</a></li>
              <li><a href="#!" className="text-primary">CSS</a></li>
              <li><a href="#!" className="text-primary">Tutorials</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
