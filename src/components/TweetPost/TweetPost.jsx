import IconsReact from "../IconsReact/IconsReact";
import "./TweetPost.scss";

const TweetPost = () => {
   return (
      <article>
         <div className="tweet">
            <div className="tweets__photo">
               <img
                  src="https://pbs.twimg.com/profile_images/1418301759898927107/YSLvXCM7_400x400.png"
                  alt="Perfil__photo"
               />
            </div>
            <div className="tweets__post">
               <div className="tweets__post--profile">
                  <div>
                     <span className="tweets__post--profile-name">
                        GuiiSantos
                     </span>
                     <span className="tweets__post--profile-username">
                        @DzScript
                     </span>
                  </div>
                  <div className="tweets__post--profile-more">
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
               <div className="tweets__post--text">
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Voluptas vel quo sit atque expedita culpa?
                  </p>
               </div>
               <IconsReact />
            </div>
         </div>
      </article>
   );
};

export default TweetPost;
