import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slider from "./Components/Header";
import "./index.css";
import Acr from "./Components/Acr";
import Contact from "./Components/Contact";
import Image1 from "./img/terrarium_overview1-300x277.jpg";
import SRC from "./img/terrarium_bulbal.jpg";
import Footer from "./Components/Footer";

class Home extends React.Component {
  render() {
    return (
      <body>
        <div class="heading">
          <Slider />
          <section className="section border-top">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-4 text-center">
                  <h3 className="Main Heading">
                    Bulbasaur Pokeball Moss Terrarium
                  </h3>
                  <div className="underline mx-auto"></div>
                  <h6>by kurt on March 4, 2020</h6>
                </div>

                <div className="col-md-6">
                  <div className="card shadow">
                    <img
                      src={Image1}
                      className="w-100 border-bottom"
                      alt="Services"
                      width="334px"
                      height="394px"
                    />
                    <div className="card-body">
                      <p>
                        My latest crafting adventures resulted in a pokeball
                        moss terrarium housing a small, sleeping bulbasaur. It
                        was a fun project, which I believe also resulted in a
                        happy recipient.
                        <br />
                        <br />
                        The project’s inception came about while watching family
                        members play Pokemon Go. I began to wonder about life
                        inside a pokeball. My first thoughts weren’t too rosy,
                        but then I tried to imagine a larger, life-sustaining,
                        extra-dimensional space that would be far less likely to
                        be mistaken for animal cruelty.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card shadow">
                    <img
                      src={SRC}
                      className="w-100 border-bottom"
                      alt="Services1"
                      width="334px"
                      height="394px"
                    />
                    <div className="card-body">
                      <p>
                        I sourced a spherical glass planter and began building a
                        moss terrarium. The mosses used were wild foraged. I
                        also added a really cool pixie cup lichen to the setup.
                        <br />
                        <br />
                        Next, I needed to sculpt a sleeping bulbasaur.
                        Admittedly I don’t know all that much about pokemon and
                        slowly began to realize bulbasaur’s model is based on a
                        frog. I did my best shaping it out of polymer clay so
                        that it would be able to withstand the environment’s
                        humidity. It was was pretty small and difficult for me
                        to really get the details I envisioned.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="containerone">
            <div class="col-sm-10">
              <h3>The Pokeball Casing</h3>
              <br />
              <p>
                {" "}
                Next, I needed to craft the lower-half of the pokeball. My first
                attempts involved 3D printing. It seemed easy enough to build
                some 3D models that would get me pretty close to the shape and
                smoothness I would need. I attempted several 3D printings, but
                my printer’s print bed was not large enough to accommodate the
                job. I attempted breaking the print up into several pieces,
                which did not seem to provide the stability I needed without
                more work.
                <br />
                <br />
                Eventually I returned to papier-mâché. Using the planter itself,
                I built the lower casing out for a perfect fit. After a few
                coats of paint, I mounted the final model on a piece of stained
                wood. The casing, wood stand, and all crevices were sealed so
                water would not eventually wreak havoc.
              </p>
            </div>
          </div>{" "}
          <br />
          <div class="container">
            <div class="row">
              <h3>Final Thoughts</h3>
              <br />
              <br />
              <div class="col-sm-2">
                <div class="rounded-circle">
                  <img
                    src="images/bulbasaur-scale.jpg"
                    alt=""
                    class="rounded-circle"
                    width="200px"
                    height="120px"
                  />
                </div>
              </div>
              <div class="col-sm-10">
                <p class="description">
                  While I was happy with the overall outcome for a first attempt
                  there are a number of things I would like to address were I to
                  do it again. The roughness of the papier-mâché pokeball
                  continues to bug me. I would want to find a larger 3D printer
                  or outsource the printing in order to get a base for a nice
                  smooth pokeball.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="container">
            <div class="row">
              <div class="col-sm-9">
                <p class="description">
                  The bulbasaur was also pretty challenging to sculpt. My big
                  fingers tend to make fine manipulation a bit more challenging.
                  Sculpting would be an area I might spend more time refining
                  next time or perhaps find someone else to assist me. In the
                  end the recipient of the pokeball seemed pretty happy with the
                  results, so mission accomplished.
                </p>
              </div>
              <div class="col-sm-3">
                <div class="rounded-circle">
                  <img
                    src="images/forbidden_dumpling-300x259.jpg"
                    alt=""
                    class="rounded-circle"
                    width="200px"
                    height="110px"
                  />
                </div>
              </div>
              <br />

              <Contact />

              <h3 className="Main Heading">
                Recent Posts, Categories and Archives
              </h3>
            </div>
            <Acr />
          </div>
        </div>
        <Footer />
      </body>
    );
  }
}
export default Home;
