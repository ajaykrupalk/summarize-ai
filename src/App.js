import { useState } from 'react';
import './App.css';
import InputPanel from './components/InputPanel';
import OutputPanel from './components/OutputPanel';
import PageHeader from './components/PageHeader';

function App() {
  const [bookName, setBookName] = useState('');

  const handleInputValue = (bookValue) => {
    setBookName(bookValue)
  }

  return (
    <div className='w-screen font-sans'>
      <PageHeader/>
      <div className='flex flex-wrap p-5 mt-1 gap-y-10 md:gap-x-10 lg:gap-x-20 xl:gap-x-30'>
        <div className='w-screen md:flex md:items-center md:w-[30vw] md:ml-[5vw]'>
          <InputPanel onInputValue={handleInputValue}/>
        </div>
        <div className='w-screen md:w-[50vw]'>
          <OutputPanel bookName={bookName}/>
        </div>
      </div>     
    </div>
  );
}

export default App;
