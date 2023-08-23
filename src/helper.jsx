const url = 'https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=10&category=sports';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '586016bf96mshba42b28b09247bep1624dbjsn3e22e5f58dc4',
		'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}