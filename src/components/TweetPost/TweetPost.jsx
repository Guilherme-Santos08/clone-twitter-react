import IconsReact from "../IconsReact/IconsReact";
import "./TweetPost.scss";

const TweetPost = ({ children }) => {
   return (
      <article>
         <div className="tweet">
            <div className="tweets__photo">
               <img
                  src="https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg"
                  alt="Perfil__photo"
               />
            </div>
            <div className="tweets__post">
               <div className="tweets__post--profile">
                  <div>
                     <span className="tweets__post--profile-name">
                        Twitter-Clone
                     </span>
                     <span className="tweets__post--profile-username">
                        @TwitteClone
                     </span>
                  </div>
                  <div className="tweets__post--profile-more">
                     <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                     >
                        <g>
                           <circle cx="5" cy="12" r="2"></circle>
                           <circle cx="12" cy="12" r="2"></circle>
                           <circle cx="19" cy="12" r="2"></circle>
                        </g>
                     </svg>
                  </div>
               </div>
               <div className="tweets__post--text">
                  <p>{children}</p>
               </div>
               <IconsReact />
            </div>
         </div>
      </article>
   );
};

export default TweetPost;
