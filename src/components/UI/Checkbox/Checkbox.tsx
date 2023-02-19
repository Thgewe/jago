import React, {FC} from 'react';
import cl from './checkbox.module.scss';

interface ICheckboxProps {
    name?: string,
    initialState?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    id: string,
    label?: string,
}

const Checkbox: FC<ICheckboxProps> = ({
                                          label,
                                          id,
                                          onChange,
                                          name,
                                          initialState = false
}) => {
    return (
        <div className={cl.box}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                className={cl.box}
                name={name}
                type={'checkbox'}
                defaultChecked={initialState}
                onChange={onChange}
            />
            <label className={cl.fake} htmlFor={id}></label>
        </div>
    );
};

export default Checkbox;