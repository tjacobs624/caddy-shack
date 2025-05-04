import React, { useState } from 'react';

const ProxyEntryForm = ({ onSubmit, initialEntry }) => {
    const [entry, setEntry] = useState(initialEntry || { domain: '', target: '' });

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