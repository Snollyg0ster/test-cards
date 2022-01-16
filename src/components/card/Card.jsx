import './styles.scss';
import CircularProgress from '../circularProgress'
import CustomButton from '../customButton'

const Cards = ({ children, isLoading, getMoreData }) => {

    return (
        <div className="cards">
            {children}
            {isLoading && <div className="circularProgress"><CircularProgress/></div>}
            <CustomButton title="More" callback={getMoreData}/>
        </div>
    )
}

export default Cards;