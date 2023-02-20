import React from 'react';
import cl from './syncLoader.module.scss';
import {useAppSelector} from "../../hooks/redux";

const SyncLoader = () => {

    const sync = useAppSelector(state => state.syncReducer)

    return (
        <div className={cl.sync + (sync.sync ? ' ' + cl.active : '') + (sync.error ? ' ' + cl.error : '')}>
            {sync.error
                ? <div className={cl.errorBlock}>{sync.error.message}</div>
                : <svg xmlns="http://www.w3.org/2000/svg" style={{
                    margin: 'auto',
                    background: "transparent",
                    display: 'block',
                    color: 'var(--color-text-primary)'
                }}  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="currentColor" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                    </circle>
                </svg>
            }
        </div>
    );
};

export default SyncLoader;