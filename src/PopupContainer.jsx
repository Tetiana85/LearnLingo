import ReactDOM from 'react-dom';

export const PopupContainer = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('portal'));
};
