import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="courses">Couses</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  );
};

export default Menu;
