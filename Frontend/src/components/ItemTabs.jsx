import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductSlider from './ProductSlider';

const ItemTabs = () => {
  return (
    <div className='itemTabs_container'>
        <h2 className='shop_title'>Men's wear</h2>
        <div className="innerTab">
        <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Jeans" />
        <Tab label="Trousers" />
        <Tab label="T-shirts" />
        <Tab label="Shirts" />
        <Tab label="Shorts" />
        <Tab label="Formal Shirts" />
        <Tab label="Denim Jacket" />
        <Tab label="Casual Wear" />
        <Tab label="Ethinic Wear" />
        <Tab label="Newly Arrived" />
      </Tabs>
      <ProductSlider />
        </div>
    </div>
  )
}

export default ItemTabs

