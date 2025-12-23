const NavButton = (props) => {
  const { icon, onClick, show } = props;

  return !show ? null : (
    <button className=" flex justify-center bg-purple-800 rounded-lg w-14 m-1" onClick={onClick}>
      <i
        className={`fa-solid fa-circle-chevron-${icon} text-purple-500 text-3xl py-4`}
      ></i>
    </button>
  );
};

export default NavButton;
