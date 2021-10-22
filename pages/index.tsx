import MainComponent from '../components/shared/MainComponent';
import StoreFront from '../components/StoreFront';
import { Carousel } from 'react-bootstrap';
import styles from './styles.module.css';

const StoreIndex: React.FC = () => {
  return (
    <MainComponent>
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="https://i2.wp.com/itsfoss.com/wp-content/uploads/2018/07/war-thunder.jpg?w=797&ssl=1" 
            alt="First Slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="https://i0.wp.com/itsfoss.com/wp-content/uploads/2018/07/wafku.jpg?w=795&ssl=1" 
            alt="Second Slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="https://i1.wp.com/itsfoss.com/wp-content/uploads/2018/07/star-conflict.jpg?w=782&ssl=1" 
            alt="Third Slide"
          />
        </Carousel.Item>
      </Carousel>

      <StoreFront title="Offers of the week" btn_style="highlighted"/>

      <StoreFront title="Releases"/>

      <StoreFront title="Most visited"/>
    </MainComponent>
  )
}

export default StoreIndex;