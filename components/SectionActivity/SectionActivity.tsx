import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import { sectionCodingActivity as data } from 'data/data';
import { motion, useAnimation } from 'framer-motion';
import { useIntersect } from 'lib/hooks/use-intersect';

const Container = styled.div`
  width: 100%;
`;
const ChartsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Chart = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > figure {
    width: 80%;
    @media (min-width: 1024px) {
      width: 60%;
    }
  }
`;
const chartVariants = {
  hidden: { scale: 0.9 },
  visible: { scale: 1, transition: { duration: 0.5 } },
};
const SectionActivity = () => {
  const [ref, inView] = useIntersect<HTMLDivElement>(0.3);
  const controlAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      controlAnimation.start('visible');
    }
  }, [inView, controlAnimation]);
  return (
    <Container id={data.id}>
      <SectionHeader number={data.number}>{data.title}</SectionHeader>
      {/* <ChartsContainer ref={ref}>
        {data.src.map((src) => (
          <Chart
            key={src}
            variants={chartVariants}
            animate={controlAnimation}
            initial="hidden"
          >
            <figure>
              <embed src={src}></embed>
            </figure>
          </Chart>
        ))}
      </ChartsContainer> */}
      <p style={{ textAlign: 'center' }}>
        You can see my statistics in :{' '}
        <a
          style={{ cursor: 'pointer' }}
          href='/https://github.com/Andresp08'
          target='_blank'
        >
          {' '}
          https://github.com/Andresp08
        </a>
      </p>
      <p style={{ textAlign: 'center', marginBottom: '0px' }}>
        By the way, this section will be updated soon...
      </p>
    </Container>
  );
};

export default SectionActivity;
