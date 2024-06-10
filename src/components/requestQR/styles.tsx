import styled from 'styled-components';

export const QRContainer = styled.div`
  width: 100%;
  height: 208px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const QRTimerText = styled.div`
  color: white;
  background-color: #f2702a;
  padding: 7px 14px;
  border-radius: 20px;
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

export const RefreshIconButton = styled.div`
  width: 16px;
  height: 16px;
  margin-right: -3px;
  cursor: pointer;
  background-image: url('${({ theme }) => theme.urls.refresh}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
