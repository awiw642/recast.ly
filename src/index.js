// TODO: Render the `App` component to the DOM

let target = document.getElementById('app');
ReactDOM.render(<App searchYouTube = {window.searchYouTube}
                      API_KEY = {window.YOUTUBE_API_KEY} />, target);