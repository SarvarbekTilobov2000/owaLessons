
let navItems = document.querySelectorAll('a')
let img = document.querySelector('.img')
let info = document.querySelector('.info')
let wrapper = document.querySelector('.slide-wrap')


for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', (e) => {
    if (i == 0) {
      img.setAttribute('src', '/img/img-0.svg')
      info.children[0].textContent = `Bookmark in one click`
      info.children[1].textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`
      navItems[0].style = `border-bottom:solid tomato 3px;`
      navItems[1].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
      navItems[2].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
    } else if (i == 1) {
      img.setAttribute('src', '/img/img-1.svg')
      info.children[0].textContent = `Intelligent search`
      info.children[1].textContent = `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`
      navItems[0].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
      navItems[1].style = `border-bottom:solid tomato 3px;`
      navItems[2].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
    } else if (i == 2) {
      img.setAttribute('src', '/img/img-2.svg')
      info.children[0].textContent = `Share your bookmarks`
      info.children[1].textContent = `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`
      navItems[0].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
      navItems[1].style = `border-bottom: solid rgba(0, 0, 0, 0.057) 3px;`
      navItems[2].style = `border-bottom:solid tomato 3px;`
    } else {
      console.error('else');
    }
  })

}









