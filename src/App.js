import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Search from './components/Search';
import Categories from './components/Categories';
import SideWidget from './components/SideWidget';
import Comments from './components/Comments';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <BlogPost />
            <Comments />
          </div>
          <div className="col-lg-4">
            <Search />
            <Categories />
            <SideWidget />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
