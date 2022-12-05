//import './components/Logo'
import './App.css';
import Logo from './components/Logo';
import WordBox from './components/WordBox';
import SearchButton from './components/SearchButton';
import LuckyButton from './components/LuckyButton';
import LanguageNote from './components/LanguageNote';
function App() {
  const texts=['Google Search','I\'m Feeling Lucky','Google offered in:English.Hindi,Marathi']
  return (
    <div className="App">
      <Logo/>
      <WordBox/>
      <div className='btnDir'>
      <SearchButton text={texts[0]}></SearchButton>
      <LuckyButton text={texts[1]}></LuckyButton>
      </div>
      <LanguageNote text={texts[2]}></LanguageNote>
    </div>
  );
}

export default App;
