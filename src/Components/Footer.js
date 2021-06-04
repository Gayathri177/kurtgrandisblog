import React from "react";

function Footer() {
  return (
    <section
      className="section  text-black"
      style={{ backgroundColor: "lightgreen" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>About Me</h6>
            <hr />
            <p>
              I am a technologist and entrepreneur living near North Carolina's
              Research Triangle Park where I dabble in all sorts of geekery. I
              am currently the Chief Technology Officer of Talented. I also run
              the software consultancy Grandis Technologies.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <ul>
              <li>
                <a href="mailto:kgrandis gmailcom">Email</a>
              </li>
              <li>
                <a href="https://twitter.com/kgrandis">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/kgrandis">Github</a>
              </li>
              <li>
                <a href="https://instagram.com/kgrandis">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kurtgrandis">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Categories</h6>
            <hr />
            <ul>
              <li>
                <a href="https://kurtgrandis.com/blog/category/agile/">Agile</a>
              </li>
              <li>
                <a href="https://kurtgrandis.com/blog/category/data/">Data</a>
              </li>
              <li>
                <a href="https://kurtgrandis.com/blog/category/distributed-computing/">
                  Distributed Computing
                </a>
              </li>
              <li class="cat-item cat-item-37">
                <a href="https://kurtgrandis.com/blog/category/django/">
                  Django
                </a>
              </li>
              <li class="cat-item cat-item-20">
                <a href="https://kurtgrandis.com/blog/category/education/">
                  Education
                </a>
              </li>
            </ul>
          </div>

          <div class="jumbotrontext-center" id="footer">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a
                  href="mailto:kgrandis@gmail.com"
                  class="fa fa-google nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li class="nav-item">
                <a
                  href="https://twitter.com/kgrandis"
                  class="fa fa-twitter nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/kgrandis"
                  class="fa fa-github nav-link"
                  style={{ color: "blue" }}
                />
              </li>

              <li class="nav-item">
                <a
                  href="https://www.instagram.com/accounts/login/"
                  class="fa fa-instagram nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li class="nav-item">
                <a
                  href="https://www.linkedin.com/in/kurtgrandis/"
                  class="fa fa-linkedin nav-link"
                  style={{ color: "blue" }}
                />
              </li>
            </ul>
            <p className="copyright text-center">
              Copyright &copy; Kurt Grandis <br />
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
