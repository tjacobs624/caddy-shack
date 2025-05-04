import React, { useState, useEffect } from 'react';
import ProxyEntryForm from './components/ProxyEntryForm';
import ProxyEntryList from './components/ProxyEntryList';
import { readCaddyFile, writeCaddyFile } from './services/fileService';

const App = () => {
    const [proxyEntries, setProxyEntries] = useState([]);

    useEffect(() => {
        const fetchEntries = async () => {
            const entries = await readCaddyFile();
            setProxyEntries(entries);
        };
        fetchEntries();
    }, []);

    const addProxyEntry = async (entry) => {
        const updatedEntries = [...proxyEntries, entry];
        setProxyEntries(updatedEntries);
        await writeCaddyFile(updatedEntries);
    };

    const editProxyEntry = async (index, updatedEntry) => {
        const updatedEntries = proxyEntries.map((entry, i) => (i === index ? updatedEntry : entry));
        setProxyEntries(updatedEntries);
        await writeCaddyFile(updatedEntries);
    };

    const deleteProxyEntry = async (index) => {
        const updatedEntries = proxyEntries.filter((_, i) => i !== index);
        setProxyEntries(updatedEntries);
        await writeCaddyFile(updatedEntries);
    };

    return (
        <div>
            <h1>Caddy Reverse Proxy Manager</h1>
            <ProxyEntryForm onAddEntry={addProxyEntry} />
            <ProxyEntryList 
                entries={proxyEntries} 
                onEditEntry={editProxyEntry} 
                onDeleteEntry={deleteProxyEntry} 
            />
        </div>
    );
};

export default App;