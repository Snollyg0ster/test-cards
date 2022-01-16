import './styles.scss';
import star from '../../img/star.svg'
import CustomButton from '../customButton'

const Card = ({ data }) => {

    return (
        <div className="card" style={{backgroundImage: `url(${data.photos.url})`}}>
            <div className="info">
                <div className="infoHeader">
                    <div className="email" title={data.comments.email}>{data.comments.email}</div>
                    <div className="rating">
                        {data.rating}
                        <img alt="star" className="star" src={star}></img>
                    </div>
                </div>
                <div className="description">
                    <div className="descriptionCont">
                        <div className="descriptionBody">{data.comments.body}</div>
                        <CustomButton title={'Visit comment'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;