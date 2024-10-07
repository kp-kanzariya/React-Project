import React from "react";

function CallToAction() {
  return (
    <>
      <section
        id="call-to-action"
        class="call-to-action section light-background"
      >
        <div class="content">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <h3>Subscribe To Our Newsletter</h3>
                <p class="opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, reprehenderit!
                </p>
              </div>
              <div class="col-lg-6">
                <form
                  action="forms/newsletter.php"
                  class="form-subscribe php-email-form"
                >
                  <div class="form-group d-flex align-items-stretch">
                    <input
                      type="email"
                      name="email"
                      class="form-control h-100"
                      placeholder="Enter your e-mail"
                    />
                    <input
                      type="submit"
                      class="btn btn-secondary px-4"
                      value="Subcribe"
                    />
                  </div>
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
