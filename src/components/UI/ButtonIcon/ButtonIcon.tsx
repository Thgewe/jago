import React, {FC, SyntheticEvent} from 'react';
import cl from './buttonIcon.module.scss';

interface IButtonIconProps {
    Icon: JSX.Element,
    clickHandler: React.EventHandler<SyntheticEvent>,
    title: string,
}

const ButtonIcon: FC<IButtonIconProps> = ({Icon, clickHandler, title}) => {
    return (
        <button className={cl.button} onClick={clickHandler} title={title}>
            {Icon}
        </button>
    );
};

export default ButtonIcon;