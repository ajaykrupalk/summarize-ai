import './App.css';
import InputPanel from './components/InputPanel';
import OutputPanel from './components/OutputPanel';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <div className='w-screen font-sans'>
      <PageHeader/>
      <div className='flex flex-wrap p-5 mt-1 gap-y-10 lg:gap-x-20 xl:gap-x-40'>
        <div className='w-screen md:w-96 lg:ml-5 xl:ml-40'>
          <InputPanel />
        </div>
        <div className='w-screen lg:w-[30em] xl:w-[40em]'>
          <OutputPanel />
        </div>
      </div>     
    </div>
  );
}

export default App;
