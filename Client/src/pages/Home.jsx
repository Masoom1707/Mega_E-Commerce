
import HomeRightSidebar from '../components/HomeRightSidebar'
import HomeSidebar from '../components/HomeSidebar'
import '../css/home.css'

const Home = () => {
  return (
    <div className="home_container">
      <HomeSidebar />
      <HomeRightSidebar />
    </div>
  )
}

export default Home