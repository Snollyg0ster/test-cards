import './styles.scss';
import CircularProgress from '../circularProgress'
import CustomButton from '../customButton'

const Cards = ({ children, isLoading, getMoreData }) => {
    console.log(isLoading)
    return (
        <div className="cards">
            <CustomButton title="More" callback={getMoreData}/>
            {isLoading && <div className="circularProgress"><CircularProgress/></div>}
            {children}
        </div>
    )
}

export default Cards;