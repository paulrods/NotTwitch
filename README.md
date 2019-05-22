<h1 align="center">
Not Twitch
</h1>
<p align="center">
<small>This is totally not twitch</small>
</p>

<p align="center">
<img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/8c813829-102a-489b-8b0f-ad75e4846536/deploy-status">
</p>

<p align="center">
<a href="https://nottwitch.netlify.com" target="\_blank" >
https://nottwitch.netlify.com
</a>
</p>

<p align="center">
<img alt="Image of NotTwitch" src="https://drive.google.com/uc?id=1xV4swTOl8-_tmBBa0ayA06MEMlBgYf1M" height="200px">
</p>
<p align="center">
😛 📺 📹
</p>

## ???

This project is a code assignment proposed by a local company ( 👋 Hi there! )

## This project has the following functionalities

- ✅ Allow the users to search for streams
- ✅ Allow the user to choose the number of results when performing a search
  - ✅ Remember this value even when the browser is closed.
- ✅ Allow the user to open a stream from the search results;
  - ✅ Keep the the viewers count updated;

### It also has some other neat features

- ⭐️ Cross Browser compatibility with modern browsers
- ⭐️ Usage feedback
- ⭐️ This app is performance aware
- ⭐️ Incremental Search
- ⭐️ Responsive UI
- ⭐️ Routing
- ⭐️ Different environments for development and production
- ⭐️ Unit tests
- ⭐️ Functional Tests
- ⭐️ Clean code

## How to run this project

1. Clone this repo.
2. In the root of the project install the dependencies using `npm i`.
3. Go to https://dev.twitch.tv/ and register a new application. Get your Twitch client id.
4. In the root of the project create an `.env` file and paste your twitch client id here. Use the following format:

```yaml
TWITCH_CLIENT_ID=yourTwitchClientId
```

5. Run the project in development mode with `npm run start` or in production mode with `npm run build`
6. ???
7. Profit!

## Project Structure

```ascii
## project root
|
+> assets (static files, images, etc)
|
+> build (build directory)
|
+> lib
|    +-> GlobalStyles.js (all global CSS)
|    |
|    +-> theme.js (reusable CSS variables)
|    |
|    +-> twitchApi.js (API client and functions)
|
+> src
|    +-> index.js (project entry file)
|    |
|    +-> App.js (App entry file. Where Router is defined)
|    |
|    +-> components
|                 +-> Main
|                 |      +-> Main.js (React component)
|                 |      |
v                 |      +-> styles.js (Styled-Components styles)
(other            |      |
config            |      +-> helpers.js (helper functions)(optional)
files)            |
                  +-> Header
                  |
                  +-> Search
                  |
                  +-> Stream
                  |
                  +-> StreamCard

```
