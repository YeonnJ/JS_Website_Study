const getLatestNews = () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=2`
  );
  let header = new Headers({
    "x-api-key": "LAjDLf7fgAhHe29KTbmQ-9sNhJanjXy8xZ_PLPR7xRw",
  });
  let response = fetch(url, { headers: header });
};

getLatestNews();
