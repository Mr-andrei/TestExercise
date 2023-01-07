import React, { ChangeEvent, useState } from 'react';

import styles from './workersList.module.css';
import { useFilterWorkers } from './useFilterWorkers';
import { TypeOfWorker } from '../../types';

export type Filter = TypeOfWorker | 'All';

export const WorkersList = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState<Filter>('All');

    const workers = useFilterWorkers(filter);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.filtersContainer}>
                <button className={styles.filterButton} onClick={() => setFilter('Employee')}>
                    Employee
                </button>
                <button className={styles.filterButton} onClick={() => setFilter('Engineer')}>
                    Engineer
                </button>
                <button className={styles.filterButton} onClick={() => setFilter('All')}>
                    All
                </button>
            </div>

            <div className={styles.listContainer}>
                <input
                    className={styles.search}
                    placeholder="Search"
                    type="text"
                    value={searchValue}
                    onChange={changeHandler}
                />

                {workers
                    .filter(({ name }) => name.match(new RegExp(searchValue, 'i')))
                    .map(({ id, name, type, workedTime }) => (
                        <div className={styles.workerContainer} key={id}>
                            <span className={styles.worker}>{name}</span>
                            <span className={styles.worker}>{type}</span>
                            <span className={styles.worker}>{workedTime.workedHours} h</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

