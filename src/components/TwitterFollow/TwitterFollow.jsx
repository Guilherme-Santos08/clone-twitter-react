import "./TwitterFollow.scss";

const TwitterFollow = () => {
   return (
      <div className="follow">
         <div className="follow__person">
            <div className="follow__person--img">
               <img
                  src="https://pbs.twimg.com/profile_images/1418301759898927107/YSLvXCM7_400x400.png"
                  alt="Follow"
               />
            </div>
            <div className="follow__person--person">
               <span className="follow__person--name">
                  Guii Santos
               </span>
               <span className="follow__person--username">
                  @DzScript
               </span>
            </div>
         </div>
         <div className="follow__btn">
            <button>Follow</button>
         </div>
      </div>
   );
};

export default TwitterFollow;
