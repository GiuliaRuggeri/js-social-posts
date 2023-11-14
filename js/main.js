const postContainer = document.getElementById("container");

let post = [

    {
        photo: "https://unsplash.it/300/300?image=",
        author: "Phil Mangione",
        time: "12/10/2023",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        img: "https://unsplash.it/600/300?image=1",


    },{
        photo: "https://unsplash.it/300/300?image=",
        author: "Sofia Perlari",
        time: "09/13/2023",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        img: "https://unsplash.it/600/300?image=1",

    },{
        photo: "https://unsplash.it/300/300?image=",
        author: "Phil Mangione",
        time: "10/14/2023",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        img: "https://unsplash.it/600/300?image=1",

    },{
        photo: "https://unsplash.it/300/300?image=",
        author: "Sofia Perlari",
        time: "11/14/2023",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        img: "https://unsplash.it/600/300?image=1",

    }
]

post.forEach((element, index, array)=>{

    createPost(element, index);
    console.log(array[index]);

})




function createPost(card, i) {

    let createPost=`
    <div class="post" id="${i}">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${card.photo}${i}" alt="Phil Mangione">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${card.author}</div>
                        <div class="post-meta__time">${card.time}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${card.text}</div>
            <div class="post__image">
                <img src="${card.img}${i}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div>
            </div>
        </div>
    
    `

    postContainer.innerHTML+=createPost;

}