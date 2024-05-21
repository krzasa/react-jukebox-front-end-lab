import { useState, useEffect } from 'react';
import * as jukeboxService from './services/jukeboxService';


const App = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };








  return 
  (
  <h1>Hello world!</h1>
  
  );
};

export default App;