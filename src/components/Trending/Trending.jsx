import "./Trending.scss";

const Trending = ({ type, title }) => {
   return (
      <div className="trending">
         <div className="trending__info">
            <span className="trending__info--type">{type}</span>

            <span className="trending__info--title">{title}</span>
         </div>
         <div className="treading__more">
            <svg
               viewBox="0 0 24 24"
               aria-hidden="true"
               class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
            >
               <g>
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
               </g>
            </svg>
         </div>
      </div>
   );
};

export default Trending;
