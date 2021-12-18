let news = [];
let menus = document.querySelectorAll(".menus button");
menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getNewsByTopic(event))
);
const getLatestNews = async () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=12`
  );
  let header = new Headers({
    "x-api-key": "LAjDLf7fgAhHe29KTbmQ-9sNhJanjXy8xZ_PLPR7xRw",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;

  render();
};

const getNewsByTopic = async (event) => {
  console.log("클릭", event.target.textContent);
  let topic = event.target.textContent.toLowerCase();
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&page_size=12&topic=${topic}`
  );
  let header = new Headers({
    "x-api-key": "LAjDLf7fgAhHe29KTbmQ-9sNhJanjXy8xZ_PLPR7xRw",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
  render();
};

const render = () => {
  let newsHTML = "";
  newsHTML = news
    .map((item) => {
      return `<div class="row-news">
    <div class="col-lg-4">
    <img class="news-img" src="${item.media}" alt="">
    </div>

    <div class="col-lg-8">
      <h2>
        ${item.title}
      </h2>
      <p>
      ${item.summary}
      </p>
      <div>
      ${item.rights} * ${item.published_date}
      </div>
    </div>
</div>`;
    })
    .join("");

  document.getElementById("news-board").innerHTML = newsHTML;
};
//async, await ;비동기처리
//API부르는 방식이 주로 ajax, axios, fetch가 있음. 이중에 fetch가 제일 간단함.

getLatestNews();
