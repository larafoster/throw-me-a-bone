import React from 'react';
import { Container } from 'react-bootstrap';
const StickyFooter = () => {
  return (
    <>
<footer class="footer mt-auto py-3">
 
<Container>
<img
                    alt="..."
                    className="img-fluid"
                    width="400"
                    src={require("../assets/images/logo-dev2.png").default}
                  /></Container>
</footer>
    </>
  );
}
export default StickyFooter;