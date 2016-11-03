/* global document*/
import React from 'react';
import {Flex} from 'react-flex';
import {spring, Motion} from 'react-motion';
import Helmet from 'react-helmet';
import StaggeredName from './components/StaggeredName.jsx';
import MainMenu from './components/MainMenu.jsx';
import { fade} from 'react-router-transitioner';

const popConfig = { stiffness: 360, damping: 25 };

const Work = () => {
  return (
    <Motion
      role="main"
      defaultStyle={{v: 0}}
      style={{v: spring(1)}}
    >
      {({v}) => <Flex row alignItems="center" className="noscroll" justifyContent="center" style={{height: '100%'}}>
        <Helmet
          title="Works | Jason J. Nathan"
          meta={[
              {"name": "description", "content": "A showcase of some of my professional work and other side projects with React, Meteor and NodeJS. Oh! And PHP"}
          ]}
        />
        <div id="start-screen-container" style={{paddingTop:'70px'}}>
          <StaggeredName letters="Work" />
          <p className="block" style={{opacity: v, transform:'translate3d(${v},${v},1)'}}>
            A showcase of my work
          </p>
        </div>
        <MainMenu activePath="Work" />
      </Flex>
    }
    </Motion>
  )
}

Work.sceneConfig = fade

export default Work;
