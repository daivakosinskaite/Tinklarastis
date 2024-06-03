import React from 'react';

function Search() {
  return (
    <div className="card mb-4">
      <h5 className="card-header">Search</h5>
      <div className="card-body">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Input search term" />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button">Search</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
