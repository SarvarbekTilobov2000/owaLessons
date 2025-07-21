
let navIs = document.querySelectorAll('a')
let img = document.querySelector('.img')
let info = document.querySelector('.info')
let wrapper = document.querySelector('.slide-wrap')
for (let i = 0; i < navIs.length; i++) {
  navIs[i].addEventListener('click', (e) => {
    console.log(navIs[i]);

    if (i == 0) {
      img.setAttribute('src', '/img/img-0.svg')
      info.children[0].textContent = `Bookmark in one click`
      info.children[1].textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`
      navIs[0].style = `border-bottom:solid tomato 3px;`
      navIs[1].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
      navIs[2].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
    }
    if (i == 1) {
      img.setAttribute('src', '/img/img-1.svg')
      info.children[0].textContent = `Intelligent search`
      info.children[1].textContent = `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`
      navIs[0].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
      navIs[1].style = `border-bottom:solid tomato 3px;`
      navIs[2].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
    }
    if (i == 2) {
      img.setAttribute('src', '/img/img-2.svg')
      info.children[0].textContent = `Share your bookmarks`
      info.children[1].textContent = `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`
      navIs[0].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
      navIs[1].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
      navIs[2].style = `border-bottom:solid tomato 3px;`
    }
    else {
      console.err(false)
    }


  })

}

console.log(img.getAttribute('src'));









