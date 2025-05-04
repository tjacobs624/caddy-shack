import React from 'react';

interface ProxyEntry {
    id: number;
    domain: string;
    target: string;
}

interface ProxyEntryListProps {
    entries: ProxyEntry[];
    onEdit: (entry: ProxyEntry) => void;
    onDelete: (id: number) => void;
}

const ProxyEntryList: React.FC<ProxyEntryListProps> = ({ entries, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Proxy Entries</h2>
            <ul>
                {entries.map(entry => (
                    <li key={entry.id}>
                        <span>{entry.domain} {'>'} {entry.target}</span>
                        <button onClick={() => onEdit(entry)}>Edit</button>
                        <button onClick={() => onDelete(entry.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProxyEntryList;