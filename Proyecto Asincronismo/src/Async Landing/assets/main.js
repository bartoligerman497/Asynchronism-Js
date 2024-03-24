// https://rapidapi.com

// https://rapidapi.com/ytdlfree/api/youtube-v31

// https://es.javascript.info/script-async-defer

// Playlist Details
// id: PLZKchZBAvqLOzYzbvYefiWHCd7bXktMyV

const url = 'https://youtube-v31.p.rapidapi.com/playlists?id=PLZKchZBAvqLOzYzbvYefiWHCd7bXktMyV&part=snippet';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e6240017dmsh96dd5fbb4a01bbcp140e59jsn3e33c2125870',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

//try {
//	const response = await fetch(url, options);
//	const result = await response.text();
//	console.log(result);
//} catch (error) {
//	console.error(error);
//}

async function fetchData(url) {
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
}

(async () => {
	try {
		const playlist = await fetchData(url);
		let view = `
		${playlist.items.map(playlist => `
		<div class="group relative">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${playlist.snippet.thumbnails.default.url}" alt="" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${playlist.snippet.title}
                        </h3>
                    </div>
                </div>
		`).slice(0, 4).join('')}`;

		content.innerHTML = view;
	} catch (e) {
		console.log(e);
	}
})();