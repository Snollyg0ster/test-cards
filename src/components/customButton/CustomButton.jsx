import './styles.scss';
import clsx from 'classnames';

const CustomButton = ({ title, callback, injectedStyle }) => {

    const handleClick = (e) => callback && callback(e);

    return (
        <div className={clsx("button", injectedStyle)} onClick={handleClick}>
            <div className="buttonText">{title}</div>
        </div>
    )
}

export default CustomButton;