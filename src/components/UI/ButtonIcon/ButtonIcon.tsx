import React, {FC, SyntheticEvent} from 'react';
import cl from './buttonIcon.module.scss';

interface IButtonIconProps {
    Icon: JSX.Element,
    clickHandler: React.EventHandler<SyntheticEvent>
}

const ButtonIcon: FC<IButtonIconProps> = ({Icon, clickHandler}) => {
    return (
        <button className={cl.button} onClick={clickHandler}>
            {Icon}
        </button>
    );
};

export default ButtonIcon;