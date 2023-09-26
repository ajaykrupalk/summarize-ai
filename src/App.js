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
      <div className='flex flex-wrap p-5 mt-1 gap-y-10 lg:gap-x-20 xl:gap-x-40'>
        <div className='w-screen md:w-96 lg:ml-5 xl:ml-40 lg:flex lg:items-center'>
          <InputPanel onInputValue={handleInputValue}/>
        </div>
        <div className='w-screen lg:w-[30em] xl:w-[40em]'>
          <OutputPanel bookName={bookName}/>
        </div>
      </div>     
    </div>
  );
}

export default App;
