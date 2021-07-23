import CardInfo from "../CardInfo/CardInfo";
import Trending from "../Trending/Trending";
import TwitterFollow from "../TwitterFollow/TwitterFollow";
import "./TwitterInfo.scss";

const TwitterInfo = () => {
   return (
      <div className="twitter-info">
         <div className="twitter-search">
            <div className="twitter-search--icon">
               <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="r-9ilb82 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
               >
                  <g>
                     <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
               </svg>
            </div>

            <input
               type="text"
               aria-label="Search Twitter"
               placeholder="Search Twitter"
            />
         </div>
         <CardInfo title="What's happening">
            <Trending
               type={"Music · Live"}
               title={
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
               }
            />
            <Trending
               type={"Esport · Trending"}
               title={
                  "Brasil 4x2 Alemanha"
               }
            />
            <Trending
               type={"Games · Trending"}
               title={
                  "Fortnite"
               }
            />
            <Trending
               type={"Entertainment · Trending"}
               title={
                  "Youtube x Netflix"
               }
            />
         </CardInfo>
         
         <CardInfo title="Who to follow">
            <TwitterFollow />
            <TwitterFollow />
         </CardInfo>
      </div>
   );
};

export default TwitterInfo;
