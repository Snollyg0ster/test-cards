import './styles.scss';
import CustomButton from '../customButton'

const Cards = ({ children, isLoading, getMoreData }) => {
    
    return (
        <div className="cards">
            <CustomButton 
                title="More"
                callback={getMoreData} 
                injectedStyle="moreButton" 
                isLoading={isLoading}
            />
            <div className="cardsWrapper">
                {children}
            </div>
        </div>
    )
}

export default Cards;