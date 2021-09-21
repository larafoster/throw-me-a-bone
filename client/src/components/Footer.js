import React from 'react';

const StickyFooter = () => {
  return (
    <>
<footer className="footer mt-auto py-0 fixed-bottom">
  <div className="container d-flex justify-content-center align-items-center">
  <img
                    alt="..."
                    className="img-fluid"
                    width="120
                    "
                    src={require("../assets/images/tab-the-dog.svg").default}
                  />
 <h5>Meet the Team on <a href="https://github.com/larafoster/throw-me-a-bone"><i className="fab fa-github-alt fa-2x "></i> Github </a></h5>  </div>
</footer>                    

    </>
  );
}
export default StickyFooter;