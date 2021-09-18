import React from 'react';
import { ExternalLink } from "react-external-link";

import { Container } from 'react-bootstrap';
const StickyFooter = () => {
  return (
    <>


 
<Container>
<footer className="footer mt-auto py-3 d-flex justify-content-center align-items-center">
<img
                    alt="..."
                    className="img-fluid"
                    width="150
                    "
                    src={require("../assets/images/tab-the-dog.svg").default}
                  />
                  <h5>Meet the Team on <ExternalLink href="https://github.com/larafoster/throw-me-a-bone"><i className="fab fa-github-alt fa-2x "></i> Github </ExternalLink></h5>
                  </footer>
                  </Container>
                         

    </>
  );
}
export default StickyFooter;