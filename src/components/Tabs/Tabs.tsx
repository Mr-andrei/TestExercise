import React from 'react';

import styles from './tabs.module.css';

export type currentTab = 'list' | 'info';

type Props = {
    currentTab: currentTab;
    onSetCurrentTab: (currentTab: currentTab) => void;
};

export const Tabs = ({ currentTab, onSetCurrentTab }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.tabsContainer}>
                <div onClick={() => onSetCurrentTab('list')} className={styles.tab}>
                    Workers list
                </div>
                <div onClick={() => onSetCurrentTab('info')} className={styles.tab}>
                    Workers info
                </div>
            </div>
            <div className={currentTab === 'info' ? styles.borderInfo : styles.borderList}></div>
        </div>
    );
};

