import { useState,useMemo, useEffect } from 'react';
import './App.scss';
import CustomButton from './components/customButton';
import Cards from './components/cards';
import useData from './hooks/useData';

function App() {
  const [page, setPage] = useState(1);
  const [step] = useState(3);
  const typeOfData = useMemo(() => ['comments', 'photos'], []) 
  const [cards, isCardsLoading, isLoadingFail] = useData(typeOfData, page, step);
  const [loadedCards, setLoadedCards] = useState([])

  useEffect(() => {
    setLoadedCards(loaded => loaded.concat(cards))
  }, [cards])

  console.log('loadedCards',loadedCards)

  const getMoreData = () => {
    setPage(page => page + 1)
    console.log('more data');
  }

  return (
    <div className="App">
      <div className="buttonCont">
        <CustomButton title="Sign In" injectedStyle="signInButton"/>
      </div>
      <Cards getMoreData={getMoreData} isLoading={isCardsLoading}>
      </Cards>
    </div>
  );
}

export default App;
