import React, { useState, useEffect } from 'react';
import ProxyEntryForm from './components/ProxyEntryForm';
import ProxyEntryList from './components/ProxyEntryList';
import { readCaddyFile, writeCaddyFile } from './services/fileService';

const App = () => {
    const [proxyEntries, setProxyEntries] = useState([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

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

    const handleEntrySubmit = async (entry) => {
        if (editingIndex !== null) {
            await editProxyEntry(editingIndex, entry);
            setEditingIndex(null);
        } else {
            await addProxyEntry(entry);
        }
    };

    const editProxyEntry = async (index, updatedEntry) => {
        const updatedEntries = proxyEntries.map((entry, i) => (i === index ? updatedEntry : entry));
        setProxyEntries(updatedEntries);
        await writeCaddyFile(updatedEntries);
    };

    const startEditingEntry = (index: number) => {
        setEditingIndex(index);
    };

    const deleteProxyEntry = async (index) => {
        const updatedEntries = proxyEntries.filter((_, i) => i !== index);
        setProxyEntries(updatedEntries);
        await writeCaddyFile(updatedEntries);
    };

    return (
        <div>
            <h1>Caddy Reverse Proxy Manager</h1>
            <ProxyEntryForm onSubmit={handleEntrySubmit} initialEntry={editingIndex !== null ? proxyEntries[editingIndex] : undefined} />
            <ProxyEntryList
                entries={proxyEntries}
                onEdit={startEditingEntry}
                onDelete={deleteProxyEntry} // Corrected prop name
            />
        </div>
    );
};

export default App;