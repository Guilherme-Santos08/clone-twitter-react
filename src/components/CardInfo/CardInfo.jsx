import "./CardInfo.scss";

const CardInfo = ({ children, title }) => {
   return (
      <div className="Card">
         <span>{title}</span>
         {children}
         <div className="show-more">
            <span>Show more</span>
         </div>
      </div>
   );
};

export default CardInfo;
