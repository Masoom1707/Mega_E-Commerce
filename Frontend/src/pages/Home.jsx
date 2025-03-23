import ItemTabs from '../components/ItemTabs'
import SecondSlider from '../components/SecondSlider'
import Slider from '../components/Slider'
import '../css/home.css'

const Home = () => {
  return (
    <div className="home_container">
      <Slider />
      <SecondSlider />
      <ItemTabs />

    </div>
  )
}

export default Home