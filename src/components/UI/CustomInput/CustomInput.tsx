import React, {FC} from 'react';
import cl from './customInput.module.scss';

interface ICustomInputProps {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    type: string,
    placeholder?: string,
}

const CustomInput: FC<ICustomInputProps> = ({
                                                value,
                                                setValue,
                                                placeholder,
                                                type
}) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => setValue(e.currentTarget.value)}
            className={cl.input}
        >

        </input>
    );
};

export default CustomInput;