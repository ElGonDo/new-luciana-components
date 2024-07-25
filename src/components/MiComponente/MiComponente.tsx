import React from 'react';
import styles from './MiComponente.module.css';

interface MiComponenteProps {
  title: string;
  onClick: () => void;
}

const MiComponente: React.FC<MiComponenteProps> = ({ title, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <h1>{title}</h1>
    </div>
  );
};

export default MiComponente;