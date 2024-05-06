import "./App.css";
import img__hero from './/img/1 1.png';
import img_card1 from './/img/1.png';
import img_card2 from './/img/2.png';
import img_card3 from './/img/3.png';
import img_card4 from './/img/4.png';

const App = () => {
  return (
    <div className="App">
      <header className="header" id="header">
        <div className="container">
          <a href="#" className="logo">YOUR LOGO</a>
          <nav className="navigates">
            <a href="#">HOME</a>
            <a href="#">SHOP</a>
            <a href="#">LOOKBOOK</a>
            <a href="#">FEATURES</a>
            <a href="#">PAGES</a>
            <a href="#">BLOG</a>
          </nav>

          <div className="action">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg></a>
          </div>


        </div>
      </header>

      <div className="hero">
        <img src={img__hero} alt="" />
        <div className="titles">
          <p>NEW TREND</p>
          <h1>COLLUSION</h1>
          <p>An exclusive selection of this season's trends.</p>
          <br />
          <div className="box_btns">
            <button className="btn">DISCOVER</button>
            <button className="btn">NOW</button>
          </div>
        </div>
      </div>

      <section className="cards">
        <div className="container">
          <img src={img_card1} alt="" />
          <div className="twoImg"><img src={img_card2} alt="" />
            <img src={img_card3} alt="" /></div>
          <img src={img_card4} alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;
