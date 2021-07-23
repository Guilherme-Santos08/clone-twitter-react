import NavBar from "../../components/Navbar/Navbar"
import Tweet from "../../components/Tweet/Tweet"
import TwitterInfo from "../../components/TwitterInfo/TwitterInfo"
import "./Home.scss"

const Home = () => {
   return (
      <div className="home">
         <div>
            <NavBar />
            <Tweet />
            <TwitterInfo />
         </div>
      </div>
   );
}
 
export default Home;