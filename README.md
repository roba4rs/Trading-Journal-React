# Trading-Journal-React Project

A comprehensive trading journal application built with Flask for the backend to fetch data from MetaTrader 5 (MT5) and a React frontend for user interface.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project aims to provide traders with a robust journal to track and analyze their trades. It integrates with MetaTrader 5 to fetch trading data and offers an intuitive React-based user interface to visualize and manage the journal entries.

## Features

- Fetch real-time trading data from MetaTrader 5 using Flask.
- User-friendly React frontend for managing and viewing trade entries.
- Data visualization to analyze trading performance.
- Secure user authentication and authorization.

## Installation

### Prerequisites

- Python 3.x
- Node.js and npm
- MetaTrader 5

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/trading-journal.git
    cd trading-journal/backend
    ```

2. Create and activate a virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required Python packages:

    ```bash
    pip install -r requirements.txt
    ```

4. Set up your MT5 configuration and environment variables:

    Create a `.env` file in the `backend` directory and add your MT5 credentials and other configuration details.

    ```env
    MT5_ACCOUNT=your_mt5_account
    MT5_PASSWORD=your_mt5_password
    MT5_SERVER=your_mt5_server
    ```

5. Run the Flask server:

    ```bash
    flask run
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd ../frontend
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

## Usage

Once both the backend and frontend servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser.

- Log in or create an account.
- Connect your MetaTrader 5 account.
- View and manage your trades in the journal.
- Analyze your trading performance using the provided charts and statistics.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


## Contact

Your Name - [robel4cs@gmail.com](mailto:robel4cs@gmail.com)

Project Link: https://github.com/roba4rs/trading-journal-react
