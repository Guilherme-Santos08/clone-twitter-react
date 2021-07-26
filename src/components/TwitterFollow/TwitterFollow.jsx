import "./TwitterFollow.scss";

const TwitterFollow = () => {
   return (
      <div className="follow">
         <div className="follow__person">
            <div className="follow__person--img">
               <img
                  src="https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg"
                  alt="Follow"
               />
            </div>
            <div className="follow__person--person">
               <span className="follow__person--name">
                  Twitter-Clone
               </span>
               <span className="follow__person--username">
                  @TwitterClone
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
