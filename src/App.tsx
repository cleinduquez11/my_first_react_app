
import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
function App () {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'

];
const handleSelectedItem = (item:string) => {
  console.log(item);
}

const [alertVisibility, setAlertVisibility] =useState(false);
const handleClick = () => console.log('CLicked')
  return <>
  
  <div>
   { alertVisibility && <Alert children="My button" onClose={() => setAlertVisibility(false) }/> } 
    <Button color='danger' children='My Button' onClick={()=>setAlertVisibility(true)}/></div>
  
  </>;
}

export default App;