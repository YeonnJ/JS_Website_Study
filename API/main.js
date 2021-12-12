let news = [];
const getLatestNews = async () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=2`
  );
  let header = new Headers({
    "x-api-key": "LAjDLf7fgAhHe29KTbmQ-9sNhJanjXy8xZ_PLPR7xRw",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
};
//async, await ;비동기처리
//API부르는 방식이 주로 ajax, axios, fetch가 있음. 이중에 fetch가 제일 간단함.

getLatestNews();
