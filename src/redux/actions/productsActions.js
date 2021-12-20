import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from './actions';

const openSidebar = () => {
  return (dispatch) => dispatch({ type: SIDEBAR_OPEN });
};

const closeSidebar = () => {
  return (dispatch) => dispatch({ type: SIDEBAR_CLOSE });
};

export { openSidebar, closeSidebar };
