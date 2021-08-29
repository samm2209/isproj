import './index.css';
import data from './data';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <a href="/start">Start a project</a>
        <a href="/support">Support a project</a>
        <a href="/discover">Discover</a>

        <a className="logo" href="/">JIFUND</a>

        <a className="signin" href="/signin">Sign in</a>
        <a href="signup">Create account</a>
      </div>

      <div className="submenu">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <a href="/categories">Categories</a>
        <a href="/how">How it Works</a>
        <a href="/about">About</a>
      </div>

      <div>
        <div className="header">
          <div>
            <img src="https://img.etimg.com/thumb/msid-81090135,width-640,resizemode-4,imgsize-43980/3-ways-to-invest-in-equities.jpg" alt="banner_img"
              width="550px" height="300px"
            ></img>
          </div>
          <div className="banner-text">
            <span className="light">Make a donation,</span><span className="green"> support a cause</span>
            <p>JiFund let's you contribute and invest with as little as <span className="notlight">1000 bob</span>
              . Change a life today.</p>
            <button className="primary">Discover a campaign</button>
          </div>
        </div>

        <div className="content">
          <div>
            <h1>Ongoing campaigns you might want to see </h1>
          </div>
        </div>

        <section className="cards-wrapper">
          {
            data.projects.map((project) => (
              <Project key={project._id} project= {project}></Project>
            ))
          }
          {/* <div className="card-grid-space">
            <a className="card one" href="">
              <div>
                <h2>Relief Plates and Drink  |  Spread The Love From Your Table</h2>
                <p>
                  Put a smile on someone's face today. A charitable act of giving
                  the surplus you have to the Hamsi could go a long way.
                </p>
                <div className="dets">
                  <div className="date">1 Aug 2021</div>
                  <div className="tags">
                    <div className="tag">Donation</div>
                  </div>
                </div>
                <div className="dets">
                  <div className="trend">92% funded</div>
                  <div className="tags">
                    <div className="amount">5,160 contributions</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card two" href="">
              <div>
                <h2>The Kuku Biz  |  Poultry farming with Technology</h2>
                <p>
                  Re-imagining the chicken farming business. Automated feeding and
                  egg collection guided by data analysis.
                </p>
                <div className="dets">
                  <div className="date">22 Aug 2021</div>
                  <div className="tags">
                    <div className="tag">Reward</div>
                  </div>
                </div>
                <div className="dets">
                  <div className="trend">50% funded</div>
                  <div className="tags">
                    <div className="amount">1,300 contributions</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card three" href="">
              <div>
                <h2>Facial recognition Software  |  Security feature for Businesses  </h2>
                <p>
                  A smart way for securing business premises. Modern solutions for
                  the 21st Century. Embedded intruded detection system with AI.
                </p>
                <div className="dets">
                  <div className="date">12 Aug 2021</div>
                  <div className="tags">
                    <div className="tag">Investment</div>
                  </div>
                </div>
                <div className="dets">
                  <div className="trend">35% funded</div>
                  <div className="tags">
                    <div className="amount">900 contributions</div>
                  </div>
                </div>
              </div>
            </a>
          </div> */}
        </section>

        <form action="">
          <div className="container">
            <div className="sub-text">
              <h2 className="">Get the latest updates</h2>
              <p>Subscribe to our newsletter</p>
            </div>
            <div className="">
              <input type="text" placeholder="Name" name="name" required />
              <input type="text" placeholder="Email" name="email" required />
            </div>
            <label>
              <input type="checkbox" checked="unchecked" name="subscribe" />Weekly newsletter
            </label>
            <div className="">
              <input type="submit" value="Subscribe" />
            </div>
          </div>
        </form>

      </div>
      <footer>Copyright</footer>
    </div>
  );
}

export default App;
