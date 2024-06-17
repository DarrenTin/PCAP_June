import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import SelectedItem from './components/SelectedItem';
import { useState } from "react";

import Barry from './otters/otter1.jpeg';
import Robin from './otters/otter2.jpeg';
import Maurice from './otters/otter3.jpeg';
import Lesley from './otters/otter4.jpeg';
import Barbara from './otters/otter5.jpeg';

const ottersArray = [
  {name: 'Barry', image: Barry},
  {name: 'Robin', image: Robin},
  {name: 'Maurice', image: Maurice},
  {name: 'Lesley', image: Lesley},
  {name: 'Barbara', image: Barbara},
]

function App(){
  const [selectedPostName, setSelectedPostName] = useState('Barry');
  const selectedPost = ottersArray.find(otter => otter.name === selectedPostName);

	return (
    <div>
      <Header/>
      <ul className='post-list'>
        {
          ottersArray.map((otter, index) => {
            return <Post 
                      key={index} 
                      image={otter.image} 
                      name={otter.name} 
                      setSelectedPostName={setSelectedPostName}
                    />
          })
        }
      </ul>
      <SelectedItem 
        image={selectedPost.image} 
        name={selectedPost.name}
      />
    </div>
	);
}

export default App;
