import React from "react";
import AVAR from "./gravatar.jpeg";

function Contact() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Leave A Reply</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Name</label>
                    <input
                      type="text"
                      id="txt"
                      className="form-control"
                      placeholder="Enter Full Name "
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email</label>
                    <input
                      type="text"
                      id="txtone"
                      className="form-control"
                      placeholder="Enter The Email Address "
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Website</label>
                    <input
                      type="url"
                      id="url"
                      className="form-control"
                      placeholder="Enter The Website "
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Comment</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Type Your Message"
                    ></textarea>
                  </div>
                  <p class="cookies-consent">
                    <input
                      id="cookies-consent"
                      name="cookies-consent"
                      type="checkbox"
                      value="yes"
                    />{" "}
                    <label for="cookies-consent">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </p>
                  <div className="form-group py-3">
                    <button
                      type="submit"
                      value="Post Comment"
                      id="navigation"
                      class="btn btn-primary"
                      onClick={"mailto:kgrandis@gmail.com"}
                    >
                      {" "}
                      Post Comment
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border-start">
                  <h3>About Me</h3>
                  <div className="underline"></div>
                  <br />
                  <img src={AVAR} alt="ownerpic" class="thumbnail" />
                  <br />
                  <br />
                  <p>
                    I am a technologist and entrepreneur living near North
                    Carolina's Research Triangle Park where I dabble in all
                    sorts of geekery. I am currently the Chief Technology
                    Officer of Talented. I also run the software consultancy
                    Grandis Technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
