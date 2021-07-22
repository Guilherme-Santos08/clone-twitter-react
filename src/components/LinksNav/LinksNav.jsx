import "./LinksNav.scss";

const LinksNav = ({ title, icons }) => {
   return (
      <div className="linkPages">
         {icons}
         <span>{title}</span>
      </div>
   );
};

export default LinksNav;
