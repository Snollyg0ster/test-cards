import clsx from 'classnames';
import './styles.scss';

const CustomInput = ({injectedStyle}) => {

    return (
        <div classname={clsx(injectedStyle, "inputCont")}>
            123
        </div>
    )
}

export default CustomInput;