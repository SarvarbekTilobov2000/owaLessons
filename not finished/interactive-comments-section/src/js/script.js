const commentsWrapper = document.querySelector(".rating-cards")

let commentsData = [
    {
        id: 1,
        comment:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
        likes: 12,
        author: {
            username: "amyrobson",
            avatar: "./src/assets/images/avatar.png",
        },
        created_at: "2025-06-12T14:23:58",
        isOwner: false,
        replays: [
            {
                id: 3,
                comment:
                    "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
                likes: 12,
                isOwner: false,
                author: {
                    username: "maxblagun",
                    avatar: "./src/assets/images/max.png",
                },
                created_at: "2025-06-12T14:23:58",
            },
            {
                id: 4,
                comment:
                    "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
                likes: 12,
                isOwner: true,
                author: {
                    username: "juliusomo",
                    avatar: "./src/assets/images/julius.png",
                },
                created_at: "2025-06-12T14:23:58",
            },
        ],
    },
    {
        id: 2,
        comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque consequatur necessitatibus libero perspiciatis voluptatem molestiae error ipsum nesciunt nam, id aperiam eos sunt iste. Possimus id repellat aliquam nesciunt doloribus?",
        likes: 3,
        author: {
            username: "maxblagun",
            avatar: "./src/assets/images/max.png",
        },
        created_at: "2025-06-12T14:23:58",
        isOwner: false,
        replays: [
            {
                id: 3,
                comment:
                    "Impressive! Though it seems the drag feature could be improved",
                likes: 12,
                author: {
                    username: "ramsesmiron",
                    avatar: "./src/assets/images/ramses.png",
                },
                isOwner: false,
                created_at: "2025-06-12T14:23:58",
            },
        ],
    },
    {
        id: 5,
        comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque consequatur necessitatibus libero perspiciatis voluptatem molestiae error ipsum nesciunt nam, id aperiam eos sunt iste. Possimus id repellat aliquam nesciunt doloribus?",
        likes: 3,
        author: {
            username: "juliusomo",
            avatar: "./src/assets/images/julius.png",
        },
        created_at: "2025-06-12T14:23:58",
        isOwner: true,
        replays: [
        ],
    },
]

let uniqueId = 6

function runCommentActions() {
    renderComments(commentsData)
    renderCommentReply()
    toggleRate()
    deleteComment()
    showEditForm()
}

function renderComments(comments) {
    commentsWrapper.innerHTML = ""

    comments.forEach((comment) => {
        commentsWrapper.innerHTML += `
			 <div class="card ${comment.isOwner ? "own-comment" : ""}" data-id="${comment.id}" data-username="${comment.author.username}">
                    <div class="card__feedback-controls">
                        <button class="like-btn">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="plus">
                                <path
                                    d="M6.38896 10.8919C6.52552 10.8919 6.64346 10.8422 6.74277 10.7429C6.84209 10.6436 6.89175 10.5256 6.89175 10.3891V6.99988H10.2065C10.343 6.99988 10.461 6.95022 10.5603 6.85091C10.6596 6.75159 10.7093 6.63365 10.7093 6.49709V5.26804C10.7093 5.13148 10.6596 5.01354 10.5603 4.91422C10.461 4.81491 10.343 4.76525 10.2065 4.76525H6.89175V1.39467C6.89175 1.25811 6.84209 1.14017 6.74277 1.04085C6.64346 0.941535 6.52552 0.891876 6.38896 0.891876H4.97369C4.83712 0.891876 4.71919 0.941535 4.61987 1.04085C4.52055 1.14017 4.47089 1.25811 4.47089 1.39467V4.76525H1.13756C1.001 4.76525 0.883059 4.81491 0.783741 4.91422C0.684424 5.01354 0.634766 5.13148 0.634766 5.26804V6.49709C0.634766 6.63365 0.684424 6.75159 0.783741 6.85091C0.883059 6.95022 1.001 6.99988 1.13756 6.99988H4.47089V10.3891C4.47089 10.5256 4.52055 10.6436 4.61987 10.7429C4.71919 10.8422 4.83712 10.8919 4.97369 10.8919H6.38896Z"
                                    fill="#C5C6EF" />
                            </svg>
                        </button>

                        <span>${comment.likes}</span>

                        <button class="dislike-btn">
                            <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="minus">
                                <path
                                    d="M9.31468 2.65588C9.51895 2.65588 9.69537 2.60033 9.84393 2.48922C9.99249 2.37811 10.0668 2.24616 10.0668 2.09338V0.718384C10.0668 0.565606 9.99249 0.433662 9.84393 0.32255C9.69537 0.211439 9.51895 0.155884 9.31468 0.155884H0.818862C0.61459 0.155884 0.438175 0.211439 0.289614 0.32255C0.141053 0.433662 0.0667725 0.565606 0.0667725 0.718384V2.09338C0.0667725 2.24616 0.141053 2.37811 0.289614 2.48922C0.438175 2.60033 0.61459 2.65588 0.818862 2.65588H9.31468Z"
                                    fill="#C5C6EF" />
                            </svg>
                        </button>
                    </div>

                    <div class="comment">
                        <div class="comment__header">
                            <div class="comment__username">
                                <img src="${comment.author.avatar}" alt="${comment.author.username}" />
                                <div class="box">
                                    <h4>${comment.author.username}</h4>
                                    <div class="me">You</div>
                                </div>
                                <span>${moment(new Date(comment.created_at), "DD.MMMM.YYYY").fromNow()}</span>
                            </div>
                            <div class="comment-controls">
                                <button class="delete-btn">
                                    <img src="./src/assets/icon/delete.svg" alt="delete icon" />
                                    Delete
                                </button>
                                <button class="edit-btn">
                                    <img src="./src/assets/icon/edit.svg" alt="edit icon" />
                                    Edit
                                </button>
                                <button class="reply-btn">
                                    <img src="./src/assets/icon/reply.svg" alt="reply icon" />
                                    Reply
                                </button>
                            </div>
                        </div>

                        <div class="comment__text">
                            <p>
                                ${comment.comment}
                            </p>
                            <div class="editable">
                                <textarea placeholder="Add a comment" class="comment-editable__textarea"></textarea>
                                <button class="comment-editable__btn">update</button>
                            </div>
                        </div>
                    </div>
                </div>
				
		`

        if (Array.isArray(comment.replays) && comment.replays.length > 0) {
            comment.replays.forEach((replay) => {

                commentsWrapper.innerHTML += `
                    <div class="replying-cards">
                        <div class="wrapper">
                            <div class="reply-card card ${replay.isOwner ? "own-comment" : ""}" data-id="${comment.id}" data-replay_id="${replay.id}" data-username="${replay.author.username}">
                                <div class="card__feedback-controls">
                                    <button class="like-btn">
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus">
                                        <path
                                            d="M6.38896 10.8919C6.52552 10.8919 6.64346 10.8422 6.74277 10.7429C6.84209 10.6436 6.89175 10.5256 6.89175 10.3891V6.99988H10.2065C10.343 6.99988 10.461 6.95022 10.5603 6.85091C10.6596 6.75159 10.7093 6.63365 10.7093 6.49709V5.26804C10.7093 5.13148 10.6596 5.01354 10.5603 4.91422C10.461 4.81491 10.343 4.76525 10.2065 4.76525H6.89175V1.39467C6.89175 1.25811 6.84209 1.14017 6.74277 1.04085C6.64346 0.941535 6.52552 0.891876 6.38896 0.891876H4.97369C4.83712 0.891876 4.71919 0.941535 4.61987 1.04085C4.52055 1.14017 4.47089 1.25811 4.47089 1.39467V4.76525H1.13756C1.001 4.76525 0.883059 4.81491 0.783741 4.91422C0.684424 5.01354 0.634766 5.13148 0.634766 5.26804V6.49709C0.634766 6.63365 0.684424 6.75159 0.783741 6.85091C0.883059 6.95022 1.001 6.99988 1.13756 6.99988H4.47089V10.3891C4.47089 10.5256 4.52055 10.6436 4.61987 10.7429C4.71919 10.8422 4.83712 10.8919 4.97369 10.8919H6.38896Z"
                                            fill="#C5C6EF" />
                                    </svg>
                                </button>

                                <span>${replay.likes}</span>

                                <button class="dislike-btn">
                                    <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg" class="minus">
                                        <path
                                            d="M9.31468 2.65588C9.51895 2.65588 9.69537 2.60033 9.84393 2.48922C9.99249 2.37811 10.0668 2.24616 10.0668 2.09338V0.718384C10.0668 0.565606 9.99249 0.433662 9.84393 0.32255C9.69537 0.211439 9.51895 0.155884 9.31468 0.155884H0.818862C0.61459 0.155884 0.438175 0.211439 0.289614 0.32255C0.141053 0.433662 0.0667725 0.565606 0.0667725 0.718384V2.09338C0.0667725 2.24616 0.141053 2.37811 0.289614 2.48922C0.438175 2.60033 0.61459 2.65588 0.818862 2.65588H9.31468Z"
                                            fill="#C5C6EF" />
                                    </svg>
                                </button>
                            </div>

                            <div class="comment">
                                <div class="comment__header">
                                    <div class="comment__username">
                                        <img src="${replay.author.avatar}" alt="${replay.author.username}" />
                                        <div class="box">
                                            <h4>${replay.author.username}</h4>
                                            <div class="me">You</div>
                                        </div>
                                        <span>${moment(new Date(replay.created_at), "DD.MMMM.YYYY").fromNow()}</span>
                                    </div>
                                    <div class="comment-controls">
                                        <button class="delete-btn">
                                            <img src="./src/assets/icon/delete.svg" alt="delete icon" />
                                            Delete
                                        </button>
                                        <button class="edit-btn">
                                            <img src="./src/assets/icon/edit.svg" alt="edit icon" />
                                            Edit
                                        </button>
                                        <button class="reply-btn">
                                            <img src="./src/assets/icon/reply.svg" alt="reply icon" />
                                            Reply
                                        </button>
                                    </div>
                                </div>

                                <div class="comment__text">
                                    <p>
                                        ${replay.comment}
                                    </p>
                                    <div class="editable">
                                        <textarea placeholder="Add a comment" class="comment-editable__textarea"></textarea>
                                        <button class="comment-editable__btn">update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            `
            })
        }
    })
}

function toggleLike(commentItem) {
    commentsData = commentsData.map((item) => {
        if (Number(item.id) === Number(commentItem.dataset.id)) {
            return { ...item, likes: item.likes + 1 }
        }

        return item
    })

    runCommentActions()
}

function toggleDislike(commentItem) {
    commentsData = commentsData.map((item) => {
        if (Number(item.id) === Number(commentItem.dataset.id)) {
            return { ...item, likes: item.likes - 1 }
        }

        return item
    })

    runCommentActions()
}

function toggleRate() {
    let commentsList = document.querySelectorAll(".card")

    commentsList.forEach((commentItem) => {
        const likeBtn = commentItem.querySelector(".like-btn")
        const dislikeBtn = commentItem.querySelector(".dislike-btn")

        likeBtn.addEventListener("click", toggleLike.bind(this, commentItem))
        likeBtn.removeEventListener("click", toggleLike.bind(this, commentItem))

        dislikeBtn.addEventListener("click", toggleDislike.bind(this, commentItem))
        dislikeBtn.removeEventListener("click", toggleDislike.bind(this, commentItem))
    })
}

function createComment() {
    const commentInp = document.querySelector(".comment-form__textarea")
    const addCommentBtn = document.querySelector(".comment-form__submit-btn")

    addCommentBtn.addEventListener("click", () => {
        let newComment = {
            id: uniqueId,
            comment: commentInp.value,
            likes: 0,
            author: {
                username: "juliusomo",
                avatar: "./src/assets/images/julius.png",
            },
            isOwner: true,
            created_at: new Date().toISOString(),
            replays: [],
        }

        if (commentInp.value.length > 1) {
            uniqueId++

            commentsData.push(newComment)
            runCommentActions()
            commentInp.value = ""
        } else {
            alert("Komment kiritilmadi!")
        }
    })
}

function renderCommentReply() {
    let commentsList = document.querySelectorAll(".card")

    commentsList.forEach((commentItem) => {
        const replyBtn = commentItem.querySelector(".reply-btn")
        const commentId = commentItem.dataset.id
        const authorUsername = commentItem.dataset.username

        replyBtn.addEventListener('click', () => {
            const replyEditors = document.querySelectorAll('.reply-editor')

            replyEditors.forEach((replyEditor) => {
                replyEditor.remove()
            })

            commentItem.insertAdjacentHTML("afterend", `<div class="reply-editor" data-id="${commentId}">
                    <img src="./src/assets/images/julius.png" alt="no photo" />
                    <textarea class="reply-editor__textarea" placeholder="Add a comment...">@${authorUsername} </textarea>
                    <button class="reply-editor__submit-btn" type="button">REPLY</button>
                </div>`)

            createResponse()
        })

    })
}

function createResponse() {
    const replyEditors = document.querySelectorAll('.reply-editor')

    replyEditors.forEach((replyEditor) => {
        const editorInp = replyEditor.querySelector('.reply-editor__textarea')
        const editorSubmitBtn = replyEditor.querySelector('.reply-editor__submit-btn')

        const commentId = replyEditor.dataset.id

        editorSubmitBtn.addEventListener('click', () => {
            if (editorInp.value.length > 0) {
                let newResponse = {
                    id: uniqueId,
                    comment: editorInp.value,
                    likes: 0,
                    author: {
                        username: "juliusomo",
                        avatar: "./src/assets/images/julius.png",
                    },
                    isOwner: true,
                    created_at: new Date().toISOString(),
                }
                uniqueId++

                const commentIdx = commentsData.findIndex((item) => Number(item.id) === Number(commentId))

                if (commentIdx > -1) {
                    commentsData[commentIdx].replays.push(newResponse)
                    console.log(newResponse)
                    runCommentActions()
                }

            }
        })
    })
}

function deleteComment() {
    const ownCommentsList = document.querySelectorAll(".own-comment")

    ownCommentsList.forEach((commentEl) => {
        const deleteBtn = commentEl.querySelector('.delete-btn')
        const commentId = commentEl.dataset.id
        const replayId = commentEl.dataset.replay_id

        deleteBtn.addEventListener('click', () => {
            console.log('click', commentId, replayId)

            if (commentId && replayId) {
                const commentIdx = commentsData.findIndex((item) => Number(item.id) === Number(commentId))

                commentsData[commentIdx].replays = commentsData[commentIdx].replays.filter((item) => {
                    return Number(item.id) !== Number(replayId)
                })
            }

            if (commentId && !replayId) {
                const commentIdx = commentsData.findIndex((item) => Number(item.id) === Number(commentId))

                commentsData.splice(commentIdx, 1)
            }


            runCommentActions()
        })
    })
}

function showEditForm() {
    const ownCommentsList = document.querySelectorAll(".own-comment")

    ownCommentsList.forEach((commentEl) => {
        const editBtn = commentEl.querySelector('.edit-btn')

        editBtn.addEventListener('click', () => {
            commentEl.classList.add('edit')
            editComment()
        })

    })
}

function hideEditForm() {
    const ownCommentsList = document.querySelectorAll(".own-comment")

    ownCommentsList.forEach((commentEl) => {
        commentEl.classList.remove('edit')
    })
}

function editComment() {
    const ownCommentsList = document.querySelectorAll(".own-comment")

    ownCommentsList.forEach((commentEl) => {
        if (commentEl.classList.contains("edit")) {
            const formInp = commentEl.querySelector('.comment-editable__textarea')
            const formBtn = commentEl.querySelector('.comment-editable__btn')
            const commentId = commentEl.dataset.id
            const replayId = commentEl.dataset.replay_id

            formBtn.addEventListener('click', () => {
                console.log(commentId, replayId, formInp.value)
                if (formInp.value.length > 0) {
                    if (commentId && replayId) {
                        const commentIdx = commentsData.findIndex((item) => Number(item.id) === Number(commentId))

                        commentsData[commentIdx].replays = commentsData[commentIdx].replays.map((item) => {
                            if (Number(item.id) == Number(replayId)) {
                                return {
                                    ...item,
                                    comment: formInp.value
                                }
                            }
                            return item
                        })
                    }

                    if (commentId && !replayId) {
                        const commentIdx = commentsData.findIndex((item) => Number(item.id) === Number(commentId))

                        commentsData[commentIdx].comment = formInp.value
                    }

                    runCommentActions()
                    hideEditForm()
                }
            })
        }


    })
}

runCommentActions()
createComment()


