import React, { useMemo } from 'react';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';
import useScreen from '../../../hooks/useScreen';
import { IAchievement, IRewardData, IUserData } from '../../../contexts/missionProvider';

import Borders from '../../../components/borders';

import {
  AchievementIcon,
  AchievementItem,
  AchievementList,
  CloseButton,
  CloseIcon,
  ContentsWrapper,
  ModalDefaultContainer,
  TitleTypo,
  TitleWrapper,
  TorchIcon,
  LockIcon,
  NftLabel,
  HoverContent,
  NftTag,
  NftNameTypo,
  NftIdTypo,
  HoverDivider,
  RewardAtTypo,
  BottomSheetContainer,
  CloseButtonMobile,
  PrimaryButton,
  ButtonLeft,
  ButtonCenter,
  ButtonRight,
  DimmedLayer,
  AchievementDetailIcon,
  DetailInfo,
  DetailNftLabel,
  DetailName,
  DetailNftId,
  RewardDate,
  RewardDateLabel,
  RewardDateValue,
} from './styles';

const AchievementListModal = ({
  achievementList,
  userData,
  userRewardDataList,
}: {
  achievementList: IAchievement[];
  userData: IUserData;
  userRewardDataList: IRewardData[];
}) => {
  const { closeModal } = useModal();
  const { isMobile } = useScreen();
  const [isShowDetail, setIsShowDetail] = React.useState(false);
  const [selectedDetailIndex, setSelectedDetailIndex] = React.useState<number>(0);

  const parseList = useMemo(() => {
    let result: {
      isComplete: boolean;
      isReward: boolean;
      isPending: boolean;
      nftId: string;
      txHash: string;
      rewardAt: string;
    }[] = [];
    achievementList.forEach((achievement: IAchievement, index: number) => {
      const rewardData = userRewardDataList.find((rewardData) => rewardData.achievementId === achievement.id);

      result[index] = {
        isComplete: userData.achievementIdList.includes(achievement.id),
        isReward: rewardData ? rewardData.isReward : false,
        isPending: rewardData ? rewardData.isPending : false,
        nftId: rewardData ? rewardData.nftId : '',
        txHash: rewardData ? rewardData.txHash : '',
        rewardAt: rewardData ? rewardData.rewardAt : '',
      };
    });
    return result;
  }, [achievementList, userData, userRewardDataList]);

  const formatRewardDate = (date: string) => {
    const dateObj = new Date(date);
    const year = String(dateObj.getFullYear()).slice(2);
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatRewardDateTime = (date: string) => {
    const dateObj = new Date(date);
    const year = String(dateObj.getFullYear()).slice(2);
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleOpenDetail = (index: number) => {
    setSelectedDetailIndex(index);
    setIsShowDetail(true);
  };

  const handleCloseDetail = () => {
    setIsShowDetail(false);
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Modal visible={true} maskClosable={true} handleClose={handleCloseModal} width={'782px'}>
      {isMobile && (
        <React.Fragment>
          <DimmedLayer $isLoading={isShowDetail} onClick={() => handleCloseDetail()} />
          <BottomSheetContainer $visible={isShowDetail}>
            <CloseButtonMobile onClick={() => handleCloseDetail()}>
              <CloseIcon />
            </CloseButtonMobile>
            <AchievementDetailIcon $index={selectedDetailIndex} />
            <DetailInfo>
              <DetailNftLabel>{parseList[selectedDetailIndex].nftId ? 'NFT' : 'EVENT'}</DetailNftLabel>
              <DetailName>{achievementList[selectedDetailIndex].name}</DetailName>
              {parseList[selectedDetailIndex].nftId && (
                <DetailNftId># {parseList[selectedDetailIndex].nftId}</DetailNftId>
              )}
            </DetailInfo>

            {parseList[selectedDetailIndex].nftId && (
              <RewardDate>
                <RewardDateLabel>Created At</RewardDateLabel>
                <RewardDateValue>{formatRewardDateTime(parseList[selectedDetailIndex].rewardAt)}</RewardDateValue>
              </RewardDate>
            )}

            <PrimaryButton onClick={() => handleCloseDetail()}>
              <ButtonLeft />
              <ButtonCenter>CLOSE</ButtonCenter>
              <ButtonRight />
            </PrimaryButton>
          </BottomSheetContainer>
        </React.Fragment>
      )}

      <ModalDefaultContainer>
        <Borders color='#51290c'>
          <CloseButton onClick={() => handleCloseModal()}>
            <CloseIcon />
          </CloseButton>
          <ContentsWrapper>
            <TitleWrapper>
              <TorchIcon />
              <TitleTypo>Prize List</TitleTypo>
              <TorchIcon />
            </TitleWrapper>
            <Borders color='#C08960'>
              <AchievementList>
                {achievementList.map((achievement, index) => {
                  const medalName = achievement.name.split(' ')[0];
                  const medalSubName = achievement.name.split(' ')[1];
                  const targetData = parseList[index];

                  return (
                    <AchievementItem
                      key={index}
                      $complete={targetData.isComplete}
                      onClick={() => handleOpenDetail(index)}
                    >
                      <AchievementIcon $index={index}>{targetData.nftId && <NftLabel>NFT</NftLabel>}</AchievementIcon>
                      <LockIcon />
                      {isMobile === false && (
                        <HoverContent>
                          <NftTag>{targetData.nftId ? 'NFT' : 'EVENT'}</NftTag>
                          <NftNameTypo>
                            <span>{medalName}</span>
                            {targetData.nftId ? ' ' : <br />}
                            {medalSubName}
                          </NftNameTypo>
                          {targetData.nftId && (
                            <React.Fragment>
                              <NftIdTypo># {targetData.nftId}</NftIdTypo>
                              <HoverDivider />
                              <RewardAtTypo>{formatRewardDate(targetData.rewardAt)}</RewardAtTypo>
                            </React.Fragment>
                          )}
                        </HoverContent>
                      )}
                    </AchievementItem>
                  );
                })}
              </AchievementList>
            </Borders>
          </ContentsWrapper>
        </Borders>
      </ModalDefaultContainer>
    </Modal>
  );
};

export default React.memo(AchievementListModal);
