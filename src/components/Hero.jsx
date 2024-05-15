import img__hero from '../img/1 1.png';
export const Hero = () => {
    return(
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
    )
}