import React from 'react';
import './BlogPost.css';

function BlogPost() {
  return (
    <div className="blog-post">
      <h1 className="display-4 font-weight-bold">Welcome to Blog Post!</h1>
      <p className="lead text-muted font-italic">Posted on January 1, 2023 by Start Bootstrap</p>
      <div className="btn-group mb-3">
        <button className="btn btn-secondary mr-2">Web Design</button>
        <button className="btn btn-secondary">Freebies</button>
      </div>
      <div className="img-placeholder mb-3">900x400</div>
      <p>
        Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.
      </p>
      <p>
        The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether or not the life became intelligent is a different question, and we'll see if we find that.
      </p>
      <p>
        If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.
      </p>
      <h2 className="mt-4">I have odd cosmic thoughts every day</h2>
      <p>
        For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.
      </p>
      <p>
        Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.
      </p>
    </div>
  );
}

export default BlogPost;
