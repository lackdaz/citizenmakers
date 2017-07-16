import React from 'react';
import PropTypes from 'prop-types';
import menu from '../../menu';

require('./Landing.css');

const Home = (props) => {
  const { title, description, docsLink, github } = menu;
  const githubUrl = `https://ghbtns.com/github-btn.html?user=${github.user}&repo=${github.repository}`;
  return (
    <div className="home">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>

      <p className="documentation">
        <a
          className="docs-button"
          onClick={() => props.handleLink(docsLink)}
        >
          <i className="fa fa-bomb" />
          BOOM!
        </a>
      </p>
    </div>
  );
};

Home.propTypes = {
  handleLink: PropTypes.func.isRequired,
};

export default Home;
