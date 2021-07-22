import "./LinksNav.scss";

const LinksNav = ({ title, icons }) => {
   return (
      <button>
         {icons}
         <span>{title}</span>
      </button>
   );
};

export default LinksNav;
