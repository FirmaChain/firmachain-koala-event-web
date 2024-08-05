import React, { useCallback, useMemo } from 'react';

import useMission from '../../hooks/useMission';
import useWallet from '../../hooks/useWallet';
import useClear from '../../hooks/useClear';

import SectionBoard from './sectionBoard';
import SectionTitle from './sectionTitle';
import FloatingKOA from '../../components/floatingKOA';

const Stage = ({ isReady }: { isReady: boolean }) => {
  const { address } = useWallet();
  const { userData, clickFloatingCoin, getUserMissionData } = useMission();
  const { setClear, setType } = useClear();

  const isAvailableFloatingKOA = useMemo(() => {
    const nextDate = new Date(userData.floating.nextDate);
    const nowDate = new Date();
    return nowDate > nextDate;
  }, [userData]);

  const handleClick = useCallback(() => {
    clickFloatingCoin(address)
      .then(() => {
        setType(2);
        setClear(true);
        getUserMissionData(address);
      })
      .catch((error) => console.error(error));
  }, [address]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SectionTitle />
      <SectionBoard isReady={isReady} />
      {isAvailableFloatingKOA && <FloatingKOA handleClick={handleClick} />}
    </>
  );
};

export default React.memo(Stage);
