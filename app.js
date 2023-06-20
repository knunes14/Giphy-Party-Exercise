const form = document.getElementById('search-form');
const gifsContainer = document.getElementById('gifs-container');
const removeGifsButton = document.getElementById('remove-gifs');

form.addEventListener('submit', handleSubmit);
removeGifsButton.addEventListener('click', handleRemoveGifs);

async function handleSubmit(event) {
  event.preventDefault();

  const searchTerm = document.getElementById('search').value;

  try {
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        q: searchTerm,
        api_key: '9YOzx59kXr3T2y6AhG1o99OyGIGuSMLs'
      }
    });

    const gifUrl = response.data.data[0].images.original.url;
    const gifElement = createGifElement(gifUrl);
    gifsContainer.appendChild(gifElement);

  } catch (error) {
    console.error('Error fetching data from Giphy:', error);
  }
}

function createGifElement(gifUrl) {
  const gifElement = document.createElement('img');
  gifElement.src = gifUrl;
  gifElement.classList.add('gif');
  return gifElement;
}

function handleRemoveGifs() {
  gifsContainer.innerHTML = '';
}




