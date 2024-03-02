const loadData = async () => {
    const url = 'https://v2.jokeapi.dev/joke/Programming?type=single';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.joke);
}
loadData()