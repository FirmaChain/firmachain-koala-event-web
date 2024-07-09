import styled from 'styled-components';
import { MaterialDesignContent } from 'notistack';

export const MainContainer = styled.main`
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: calc(var(--vh, 1vh) * 100);
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-root': {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '-0.16px',
  },
  '&.notistack-MuiContent-success': {
    backgroundColor: '#F3FFF5',
    color: '#171717',
    border: '2px solid #48A156',
    borderRadius: '100px',
    '& svg': {
      color: '#48A156',
    },
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#FFF8F8',
    color: '#171717',
    border: '2px solid #DD2525',
    borderRadius: '100px',
    '& svg': {
      color: '#C52D2D',
    },
  },
}));

export const customSnackbarStyles = {
  success: StyledMaterialDesignContent,
  error: StyledMaterialDesignContent,
};
