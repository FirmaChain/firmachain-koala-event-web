import React from 'react';

import SectionBoard from './sectionBoard';
import SectionTitle from './sectionTitle';

const Stage = ({ isReady }: { isReady: boolean }) => {
  return (
    <>
      <SectionTitle />
      <SectionBoard isReady={isReady} />
    </>
  );
};

export default React.memo(Stage);
