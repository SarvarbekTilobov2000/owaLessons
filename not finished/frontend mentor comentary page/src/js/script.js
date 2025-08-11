let addFeedBack = document.querySelector('.add-feedback')
let commentWrap = document.querySelector('.comment-wrap')


function addFeedBackF() {
    addFeedBack.addEventListener('click', (e) => {
        let card = document.createElement('div')
        console.log(card);
        
        card.innerHTML = `<div class="vote">
            <span class="arrow">↑</span>
            <span class="count">112</span>
        </div>
        
        <div class="content">
            <h3 class="title">Add tags for solutions</h3>
            <p class="desc">Easier to search for solutions based on a specific stack.</p>
            <span class="badge">Enhancement</span>
        </div>
        
        <div class="comments">
           <img src="src/img/comment-icon.png" alt="">
            <span class="comment-count">2</span>
        </div>`
        card.setAttribute('class', 'card')
        commentWrap.append(card)

    })
}

addFeedBackF()












