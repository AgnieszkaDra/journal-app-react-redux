import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../store/slices/themeSlice';

import { FaSun, FaMoon } from 'react-icons/fa';
import { RootState } from '../../../store/store';
import { StyledHeader, ThemeToggler } from './HeaderStyled';

const Header = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledHeader>
      <ThemeToggler onClick={handleToggleTheme}>
        {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
      </ThemeToggler>
    </StyledHeader>
  );
};

export default Header;