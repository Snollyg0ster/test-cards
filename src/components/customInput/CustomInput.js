import { useState, useEffect } from 'react';
import clsx from 'classnames';
import './styles.scss';

const CustomInput = ({ injectedStyle, placeholder, value, onChange, ...inputProps }) => {
	const [isLabelPushed, setIsLabelPushed] = useState(false);

	const handleInputFocus = () => setIsLabelPushed(true);

	const handleInputBlur = () => value === '' && setIsLabelPushed(false);

	useEffect(() => { value && handleInputFocus(); }, [value])

	return (
		<div className={clsx(injectedStyle, "inputCont")}>
			<input
				className="input"
				value={value}
				onChange={onChange}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				{...inputProps}
			/>
			{placeholder &&
				<div className={clsx("title", isLabelPushed ? "pushedLabel" : "")}>
					{placeholder}
				</div>}
		</div>
	)
}

export default CustomInput;