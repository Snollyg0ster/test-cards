import { useState, useMemo, useEffect, useContext } from 'react';
import './App.scss';
import CustomButton from './components/customButton';
import Cards from './components/cards';
import Card from './components/card';
import Modal from './components/modal';
import Auth from './components/authForm'
import useData from './hooks/useData';
import { AuthProvider, AuthContext } from './auth/authContext';
import { getAuth } from 'firebase/auth'

const AuthPanel = ({ handleAuthButton }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="buttonCont">
      <CustomButton
        title={user ? "Sign out" : "Sign In"}
        injectedStyle="signInButton"
        callback={() => handleAuthButton(user)}
      />
    </div>
  )
}

function App() {
  const [page, setPage] = useState(1);
  const [step] = useState(3);
  const typeOfData = useMemo(() => ['comments', 'photos'], [])
  const [cards, isCardsLoading] = useData(typeOfData, page, step);
  const [loadedCards, setLoadedCards] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getMoreData = () => {
    setPage(page => page + 1)
  }

  const handleAuthButton = (user) => user ? getAuth().signOut() : setIsModalOpen(true)

  useEffect(() => {
    setLoadedCards(loaded => loaded.concat(cards))
  }, [cards])

  return (
    <AuthProvider>
      <div className="App">
        <AuthPanel handleAuthButton={handleAuthButton} />
        <Cards getMoreData={getMoreData} isLoading={isCardsLoading}>
          {loadedCards.map(card => (
            <Card key={card.comments.id} data={card} />
          ))}
        </Cards>
        <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
          <Auth closeModal={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </AuthProvider>
  );
}

export default App;
