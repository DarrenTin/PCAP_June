import Thumbnail from './components/Thumbnail';
import {itemImages} from '../items';

function Home({ items }) {
    return (
        {
            items.map((item) => (
              <Thumbnail 
                key={item.itemId}
                image={itemImages[item.imageId]}
                title={item.title}
              />
            ))
          }
    );
}

export default Home;