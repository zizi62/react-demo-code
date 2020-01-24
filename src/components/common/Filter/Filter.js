
import React, { useState } from 'react';
import styles from './Filter.module.css';



const Filter = (props) => {

    const [filterValue, setFilterValue] = useState('');

    const filterName = (e) => {
        setFilterValue(e.currentTarget.value);
        props.filterName(e.currentTarget.value)
    }
    const clearFilter = () => {
        setFilterValue('');
        props.filterName('')
    }

    return (
        <div className={styles.filter}>
            <input className={styles.input} type="text" onChange={(e) => filterName(e)} value={filterValue} placeholder={props.placeholder || ''} />
            {props.children}
            <button className={styles.btn} onClick={clearFilter}>Clear</button>
        </div>
    )
}

export default Filter

