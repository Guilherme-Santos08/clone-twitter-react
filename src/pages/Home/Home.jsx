import NavBar from "../../components/Navbar/Navbar"
import Tweet from "../../components/Tweet/Tweet"
import "./Home.scss"

const Home = () => {
   return (
      <div className="home">
         <div>
            <NavBar />
            <Tweet />
         </div>
      </div>
   );
}
 
export default Home;