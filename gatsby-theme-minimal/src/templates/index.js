import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Image from '../components/image';
import ModeSwitcher from '../components/modeSwitcher';


const Title = styled.h2`
  letter-spacing: -.05em;
  font-size: 3rem;
  margin-bottom: 1.25rem;
  font-weight: 700;
`;

const IntroText = styled.div`
  font-size: 1.125rem;
`;

const Homepage = () => (
  <Layout>
    <div style={{width: `40%`}}>
      <Image />
      <ModeSwitcher />
    </div>
    <div style={{width: `60%`}}>
      <Title>Hi, I am John Doe</Title>
      <IntroText>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p> Mauris laoreet, nisl pharetra porta tristique, ex risus condimentum velit, et interdum tortor quam at dui. Donec consectetur venenatis eleifend. Praesent dapibus vel orci at luctus.</p>
        <p>Sed id euismod ex. Aliquam vehicula consequat arcu, ut gravida risus volutpat in.</p>
        <p>Curabitur malesuada mauris eu scelerisque bibendum..</p>
      </IntroText>
    </div>
  </Layout>
)

export default Homepage;