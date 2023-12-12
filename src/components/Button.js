import './Button.css';

export const Button = (props) => {
  const children = props.children;

  return (
    <button onClick={props.onClick} className='btn'>
      {children}
    </button>
  );
};
