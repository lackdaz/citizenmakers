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
      <strong>
        Team members:
      </strong>
      <ul>
        <li>
          Cathy Ooi
        </li>
        <li>
          Gabriel Koh
        </li>
        <li>
          Dona Banerjee
        </li>
        <li>
          Seth Loh
        </li>
      </ul>
    </p>

  </div>
);

export default Installation;
