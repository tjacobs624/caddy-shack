# Caddy UI Manager

Caddy UI Manager is a modern web application designed to manage reverse proxy entries in the Caddyfile using a simple and intuitive user interface. This application allows users to perform traditional CRUD (Create, Read, Update, Delete) operations on reverse proxy entries without directly interacting with the API.

## Features

- Add new reverse proxy entries
- Edit existing entries
- Delete entries
- View a list of all configured reverse proxy entries

## Project Structure

```
caddy-ui-manager
├── public
│   └── index.html          # Main HTML entry point
├── src
│   ├── components          # React components for the application
│   │   ├── ProxyEntryForm.tsx  # Form for adding/editing entries
│   │   ├── ProxyEntryList.tsx  # List of existing entries
│   │   └── Header.tsx      # Application header
│   ├── services             # Service functions for file operations
│   │   └── fileService.ts   # Functions to read/write Caddyfile
│   ├── App.tsx              # Main application component
│   └── index.tsx            # Entry point for the React application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
├── vite.config.ts           # Vite configuration file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd caddy-ui-manager
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Use the form to add new reverse proxy entries.
- View the list of existing entries and use the edit or delete options as needed.
- Changes will be reflected in the Caddyfile.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bugs.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.