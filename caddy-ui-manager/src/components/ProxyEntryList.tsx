import React from 'react';

interface ProxyEntry {
    domain: string;
    target: string;
}

interface ProxyEntryListProps {
    entries: ProxyEntry[];
    onEdit: (index: number) => void;
    onDelete: (index: number) => void;
}

const ProxyEntryList: React.FC<ProxyEntryListProps> = ({ entries, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Proxy Entries</h2>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>
                        <span>{entry.domain} {'>'} {entry.target}</span>
                        <button onClick={() => onEdit(index)}>Edit</button>
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProxyEntryList;