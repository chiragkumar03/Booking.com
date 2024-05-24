import React from "react";
import mainpng from "./image/background.jpg"
import agra from "./image/agra.jpg"
import haryana from "./image/haryana.jpg"
import delhi from "./image/delhi.jpg"
import jaipur from "./image/jaipur.jpg"
import mumbai from "./image/mumbai.jpg"
import canada from "./image/canada.jpg"
import australia from "./image/australia.jpg"
import america from "./image/america.jpg"
import mexico from "./image/mexico.jpg"
import england from "./image/england.jpg"
import family from "./image/familypic.jpg"

import {
    Link,
} from "react-router-dom";
import "./home.css"



const Home = (props) => {
    return (
        <div>
            <div className="poster-box">
                <Link className="linktosignup" to="/">
                    <img class="poster-img" src={mainpng} alt="" />
                </Link>
            </div>
            <Link to="/" ></Link>
            <div class="trending-main">
                <h1 class="trending-heading">TRENDING Places</h1>
                <h2 class="trending-subheading" id="trending-main">India</h2>
                <div class="trending men-trending" id="men-trending">
                    <div class="trending-box" onClick={props.changelocationHandler}><Link to="/category" ><img src={agra} alt=""  /><p>Agra</p></Link></div>
                    <div class="trending-box" onClick={props.changelocationHandler}><Link to="/category" ><img src={haryana} alt="" /><p>Haryana</p></Link></div>
                    <div class="trending-box" onClick={props.changelocationHandler}><Link to="/category" ><img src={jaipur} alt="" /><p>Jaipur</p></Link></div>
                    <div class="trending-box" onClick={props.changelocationHandler}><Link to="/category" ><img src={delhi} alt="" /><p>Delhi</p></Link></div>
                    <div class="trending-box" onClick={props.changelocationHandler}><Link to="/category" ><img src={mumbai} alt="" /><p>Mumbai</p></Link></div>
                </div>
                <h2 class="trending-subheading" id="women-trending">Overseas</h2>
                <div class="trending women-trending">
                    <div class="trending-box"><Link to="/" ><img src={canada} alt="" /><p>Canada</p></Link></div>
                    <div class="trending-box"><Link to="/" ><img src={australia} alt="" /><p>Australia</p></Link></div>
                    <div class="trending-box"><Link to="/" ><img src={england} alt="" /><p>England</p></Link></div>
                    <div class="trending-box"><Link to="/" ><img src={america} alt="" /><p>America</p></Link></div>
                    <div class="trending-box"><Link to="/" ><img src={mexico} alt="" /><p>Mexixo</p></Link></div>
                </div>
            </div>
            <div className="new-release" id="new-release">
            <img src={family} class="rel-img" alt=""/>
            <div className="rel-box">
                <p>Best Service Provided</p>
                <h2>#1 Globaly</h2>
                <p className="first-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, a provident. Quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt unde at officiis officia eum, animi nemo, itaque quibusdam magni asperiores explicabo quos deserunt! Et officiis inventore eos sunt perferendis.</p>
                <p className="second-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse dolore, adipisci blanditiis molestias aliquid consequuntur maiores similique excepturi. Odit sunt quasi soluta adipisci fuga consequuntur sequi veniam aspernatur sed.</p>
            </div>
        </div>
        </div>

    )
}

export default Home
