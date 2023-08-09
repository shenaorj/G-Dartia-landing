const { info } = require("autoprefixer");

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCfza0jbMW1O_-a0Z86WA_UA&part=snippet%2Cid&order=date&maxResults=8';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '706dbb93c8msh9306c3f8cb768d9p1733e4jsn0b388437d603',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {

        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <a target=_blank href="https://www.youtube.com/watch?v=${video.id.videoId}">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full ">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-primary dark:text-white">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `)}
          `;
       content.innerHTML = view;   
    } catch (error) {
        console.log(error);
    }
})();

/*

document.getElementById('div1').addEventListener('click', flipCard);
document.getElementById('info1').addEventListener('click', flipCard);


function flipCard() {
  const div1 = document.getElementById('div1');
  const info1 = document.getElementById('info1');

  div1.classList.toggle("rotate-y-180");
  info1.classList.toggle("block");

} */
