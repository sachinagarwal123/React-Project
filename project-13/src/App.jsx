import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <aside>
          <div className="bars">
            <img src="icons/bars.svg" alt="bars" />
          </div>
          <div className="side-icons">
            <i>
              <img src="icons/home.svg" alt="home" />
            </i>
            <p>Home</p>
          </div>
          <div className="side-icons">
            <i>
              <img src="icons/compass.svg" alt="explore" />
            </i>
            <p>Explore</p>
          </div>
          <div className="side-icons">
            <i>
              <img src="icons/video-gallary.svg" alt="gallary" />
            </i>
            <p>Subscriptions</p>
          </div>
          <div className="side-icons">
            <i>
              <img src="icons/video-library.svg" alt="library" />
            </i>
            <p>Library</p>
          </div>
        </aside>
        <div className="main_container">
          <header>
            <nav>
              <div className="logo">
                <img src="/images/youtube-logo.png" alt="youtube logo" />
              </div>
              <div className="center-nav">
                <div className="search">
                  <input type="text" placeholder="Search" />
                  <button>
                    {" "}
                    <img src="/icons/search.svg" alt="search" />
                  </button>
                </div>
                <div className="mic">
                  <img src="/icons/mic.svg" alt="search" />
                </div>
              </div>
              <div className="side-nav">
                <i>
                  <img src="/icons/video-add.svg" alt="video add" />
                </i>
                <i>
                  <img src="/icons/dot-grid.svg" alt="dot-grid" />
                </i>
                <i>
                  <img src="/icons/bell.svg" alt="bell" />
                </i>
                <i>
                  <img src="/images/avatar.png" alt="avatar" />
                </i>
              </div>
            </nav>

            <div className="tags">
              <div className="tag dark">All</div>
              <div className="tag light">Mixes</div>
              <div className="tag light">Crypto</div>
              <div className="tag light">Html</div>
              <div className="tag light">CSS</div>
              <div className="tag light">Javascript</div>
            </div>
          </header>
          <main>
            <div className="card_container">
              <div className="card">
                <img src="/images/thumbnail.png" alt="thumbnail" />
                <div className="avatar-content">
                  <div className="avatar">
                    <img src="/images/avatar.png" alt="avatar" />
                  </div>
                </div>

                <div className="content">
                  <h3>Chakra UI complete course</h3>
                  <p className="channel-name">Sachin Agarwal</p>
                  <div className="content-status">
                    <p>10Cr views</p>
                    <p>1 day ago</p>
                  </div>
                </div>
                <div className="dots">
                  <img src="icons/dots.svg" alt="" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
