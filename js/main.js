//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.split(" ").join("-")
  console.log(choice)
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#spellName01').innerText = (data.name)
        document.querySelector('#class01').innerText = (`Has the class of ${data.classes[0].name}`)
        document.querySelector('#subClass01').innerText = (`Has the sub classes of... `)
        document.querySelector('#desc01').innerText = (data.desc)

        // forEach the array
            // clear the ul
            document.querySelector('#subClassesList').innerHTML = ""
        data.subclasses.forEach(obj => {
            console.log(obj.name)
            //create DOM element
            var li = document.createElement('li')
            // add text data to created DOM element 
            li.textContent = obj.name
            // Append above element to its parent
            document.querySelector('#subClassesList').appendChild(li)
        })
        // END forEach
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}