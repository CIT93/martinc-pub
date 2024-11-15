const output = document.getElementById("output");
const url = "https://jsonplaceholder.typicode.com/photos";
function renderPhotos(photos) {
    photos.forEach((img) => {
      const imgEl = document.createElement("img");
      imgEl.setAttribute("src", img.thumbnailUrl);
      output.appendChild(imgEl);
    })
  }

async function getPhotos() {
    try {
      const response = await fetch(url)
      const photos = await response.json()
      if (response.status === 200) {
        renderPhotos(photos.slice(0, 100))
      } else {
        console.log('server error')
    }
        } catch (error) {
        console.log('catch error', error.message)
    }
} 
async function start() {
    await getPhotos()
  }
  
start()