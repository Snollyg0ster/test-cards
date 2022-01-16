import './styles.scss';
import star from '../../img/star.svg'

const Card = ({ data }) => {

    return (
        <div className="card" style={{backgroundImage: `url(${data.photos.url})`}}>
            <div className="info">
                <div className="infoHeader">
                    <div className="email">{data.comments.email}</div>
                    <div className="rating">
                        {data.rating}
                        <img alt="star" className="star" src={star}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;