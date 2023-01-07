import React, { useState } from 'react';

import { Header } from './components/Header';
import { Tabs, currentTab } from './components/Tabs';
import { WorkersList } from './components/WorkersList';
import { WorkersInfo } from './components/WorkersInfo';

import styles from './app.module.css';

function App() {
    const [currentTab, setCurrentTab] = useState<currentTab>('list');
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Header />
                <Tabs currentTab={currentTab} onSetCurrentTab={setCurrentTab} />
                {currentTab === 'list' ? <WorkersList /> : <WorkersInfo />}
            </div>
        </div>
    );
}

export default App;
