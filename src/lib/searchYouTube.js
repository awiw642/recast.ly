var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    maxResults: max,
    key: key,
    q: query,
    type: 'video',
    videoEmbeddable: 'true',
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .error(() => {
    console.log('Search returns error.');
  });
};

/*var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};*/

window.searchYouTube = searchYouTube;
