import React from 'react';

const installationCode =
`git clone https://github.com/LucasBassetti/react-spa-boilerplate.git
cd react-spa-boilerplate
npm install
npm start
`;

const Installation = () => (
  <div className="docs-installation">
    <p>
      The citizen makers are staging a secret operation codenamed "HH Uh-oh" to find ways to synthesize common gases from water. We are not pyromaniacs (well at least, not yet). We are citizen scientists, hardware hackers, geeks just curious about what you could do with clean energy that HHO reactions that provides.
    </p>
    <p>
      In the true spirit of making, expect everyday objects, tools, controlled explosions and lots of hot glue used in the name of science and engineering!
    </p>
    <div className="wrapper">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7yZwoRmvi8A" frameBorder="0" allowFullScreen></iframe>
    </div>
  </div>

);

export default Installation;
