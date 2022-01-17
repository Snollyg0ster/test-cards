import { useState, useMemo, useEffect, useContext } from 'react';
import './App.scss';
import CustomButton from './components/customButton';
import Cards from './components/cards';
import Card from './components/card';
import Modal from './components/modal';
import Auth from './components/authForm'
import useData from './hooks/useData';
import { AuthProvider } from './auth/authContext';

function App() {
  const [page, setPage] = useState(1);
  const [step] = useState(6);
  const typeOfData = useMemo(() => ['comments', 'photos'], [])
  const [cards, isCardsLoading] = useData(typeOfData, page, step);
  const [loadedCards, setLoadedCards] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getMoreData = () => {
    setPage(page => page + 1)
  }

  useEffect(() => {
    setLoadedCards(loaded => loaded.concat(cards))
  }, [cards])

  return (
    <AuthProvider>
      <div className="App">
        <div className="buttonCont">
          <CustomButton title="Sign In" injectedStyle="signInButton" callback={() => setIsModalOpen(true)} />
        </div>
        <Cards getMoreData={getMoreData} isLoading={isCardsLoading}>
          {loadedCards.map(card => (
            <Card key={card.comments.id} data={card} />
          ))}
        </Cards>
        <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
          <Auth />
        </Modal>
      </div>
    </AuthProvider>
  );
}

export default App;
