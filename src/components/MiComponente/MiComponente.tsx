import React from 'react';
import styles from './MiComponente.module.css';

interface MiComponenteProps {
    title: string;
    onClick: () => void;
}

const MiComponente: React.FC<MiComponenteProps> = ({ title, onClick }) => {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <button onClick={onClick}>Haz clic aquí</button>
        </div>
    );
};

export default MiComponente;