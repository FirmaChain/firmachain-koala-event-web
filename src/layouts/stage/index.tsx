import React, { useMemo } from 'react';

import useMission from '../../hooks/useMission';
import useWallet from '../../hooks/useWallet';

import SectionBoard from './sectionBoard';
import SectionTitle from './sectionTitle';
import FloatingKOA from '../../components/floatingKOA';

const Stage = ({ isReady }: { isReady: boolean }) => {
  const { address } = useWallet();
  const { userData, clickFloatingCoin, getUserMissionData } = useMission();

  const isAvailableFloatingKOA = useMemo(() => {
    const nextDate = new Date(userData.floating.nextDate);
    const nowDate = new Date();
    return nowDate > nextDate;
  }, [userData]);

  const handleClick = () => {
    clickFloatingCoin(address)
      .then(() => getUserMissionData(address))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <SectionTitle />
      <SectionBoard isReady={isReady} />
      {isAvailableFloatingKOA && <FloatingKOA handleClick={handleClick} />}
    </>
  );
};

export default React.memo(Stage);
