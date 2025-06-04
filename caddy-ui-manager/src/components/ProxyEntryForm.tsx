import React, { useState, useEffect } from 'react';

interface ProxyEntry {
    domain: string;
    target: string;
}

interface ProxyEntryFormProps {
    onSubmit: (entry: ProxyEntry) => void;
    initialEntry?: ProxyEntry | null;
}

const ProxyEntryForm: React.FC<ProxyEntryFormProps> = ({ onSubmit, initialEntry }) => {
    const [entry, setEntry] = useState<ProxyEntry>(initialEntry || { domain: '', target: '' });

    useEffect(() => {
        if (initialEntry) {
            setEntry(initialEntry);
        }
    }, [initialEntry]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEntry({ ...entry, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(entry);
        setEntry({ domain: '', target: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Domain:
                    <input
                        type="text"
                        name="domain"
                        value={entry.domain}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Target:
                    <input
                        type="text"
                        name="target"
                        value={entry.target}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default ProxyEntryForm;