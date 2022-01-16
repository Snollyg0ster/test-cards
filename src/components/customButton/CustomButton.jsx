import './styles.scss';
import clsx from 'classnames';
import CircularProgress from '../circularProgress'

const CustomButton = ({ title, callback, injectedStyle, isLoading = false }) => {

    const handleClick = (e) => callback && callback(e);

    return (
        <div className={clsx("button", injectedStyle)} onClick={handleClick}>
            <div className="buttonText">
                {!isLoading ? title : <CircularProgress size={40}/>}
            </div>
        </div>
    )
}

export default CustomButton;