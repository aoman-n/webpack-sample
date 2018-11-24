import React from 'react';
import styles from './list.css';

export default function List() {
  return (
    <ul className={styles.root}>
      <li>どうも</li>
      <li>明日は</li>
      <li>晴れです</li>
    </ul>
  )
}