import './styles.scss';
import clsx from 'classnames';

const CustomCheckbox = ({ value, onChange }) => {
	return (
		<div className="externalPart" onClick={onChange}>
			<div className={clsx("internalPart", !!value ? "showCheckbox" : "")} />
		</div>
	)
}

export default CustomCheckbox;