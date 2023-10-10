# React Spotify API

This is a simple React app that demonstrates how to use the Spotify API to search for artists and display their albums.

## Getting Started

To get started with this app, follow these steps:

1. **Clone this repository to your local machine:**

    ```sh
    git clone https://github.com/aline-se/spotify-app.git
    ```

2. **Install the necessary dependencies:**

    ```sh
    cd spotify-test-project
    npm install
    ```

3. **Create a Spotify developer account and register your app.** You can do this by visiting the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard), creating a new app, and obtaining your client ID. I have included my Client ID in the `.env.local` file associated with the project; feel free to use it.

    **Note: If you want to add your own Client ID, make sure to add `http://localhost:3000/auth` to the redirect URL field inside your Spotify Developer Dashboard.**

4. **If you want to use your own client ID, just copy it and replace it in the `.env.local` file:**

    ```sh
    REACT_APP_CLIENT_ID=your_client_id
    ```

5. **Run the app:**

    ```sh
    npm start
    ```

    The app should now be running at http://localhost:3000.

## Features

This app allows you to:

- Search for artists using the Spotify API.
- View albums of the specific artist.
- View a specific album inside Spotify.

# Technologies Used

This app was built using:

- React
- Create React App
- React Router
- Tailwind CSS
- Tailwind UI
- Spotify API
