import React from 'react';

import { IMission, IUserData } from '../../contexts/missionProvider';

import SectionBoard from './sectionBoard';
import SectionTitle from './sectionTitle';

const Stage = ({
  isReady,
  missionList,
  userData,
}: {
  isReady: boolean;
  missionList: IMission[];
  userData: IUserData;
}) => {
  return (
    <>
      <SectionTitle />
      <SectionBoard isReady={isReady} missionList={missionList} userData={userData} />
    </>
  );
};

export default React.memo(Stage);
