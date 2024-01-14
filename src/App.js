import React from 'react';
import './App.css';
import ImageGrid from './ImageGrid';

// Function to dynamically import all images from the public/images folder
const importAll = (r) => r.keys().map(r);

// Import all images from the public/images folder
const images = importAll(require.context('/public/images', false, /\.(jpg|jpeg|png)$/));

const App = () => {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGrid images={images} />
    </div>
  );
};

export default App;
