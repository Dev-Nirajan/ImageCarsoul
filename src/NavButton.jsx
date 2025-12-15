const NavButton = (props) => {
  const { icon, onClick, show } = props;

  return !show ? null : (
    <button className="m-2 bg-purple-800 rounded-lg" onClick={onClick}>
      <i
        className={`fa-solid fa-circle-chevron-${icon} text-purple-500 text-3xl p-2`}
      ></i>
    </button>
  );
};

export default NavButton;
