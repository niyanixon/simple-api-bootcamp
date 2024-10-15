//Display data returned from an api

document.querySelector('button').addEventListener('click',fromKanye)

function fromKanye(){
    const url = 'https://api.kanye.rest/'

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText= `Quote from Kanye: ${data.quote}`
      })
      .catch(error => {
       console.log(`${error}`)
      });

}