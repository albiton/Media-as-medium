const articles = [
    {
        title: "7 Practical CSS Tips",
        caption: 
        "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
        topic: "Java Script",
        date: "7 july",
        author: "Albiton",
        image: "./img/Img-1.png",

    },
    {
        title: "7 Practical CSS Tips",
        caption: 
        "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a  challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        topic: "Java Script",
        date: "7 july",
        author: "Albiton",
        image: "./img/Img-2.png",

    },
    {
        title: "7 Practical CSS Tips",
        caption: 
        "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a  challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        topic: "Java Script",
        date: "7 july",
        author: "Albiton",
        image: "./img/Img-3.png" ,
    }
];

const articleDiv = document.getElementById("articles");

articles.map((item) => {
    const html = `
    <div class="info">
    <div class="main">
        <div class="main-head">
        <img src="./img/Img.png" alt="">
            <div class="head-info">
                <p class="author">${item.author} · ${item.date}</p>
            </div>
        </div>
    
    <div class="main-body">
    <a href="./page.html">
    <h1>${item.title}</h1>
    </a>
    <p>${item.caption}</p>
    </div>

    <div class="main-bottom">
    <div class="bottom-text">
        <button>Java Script</button>
        <p class="time">12 min read · Selected for you</p>
    </div>
    
    <div class="bottom-pic"> 
        <img src="./img/cubs.png" alt="">
    </div>
    </div>
    </div>

    <div class="blog-pic">
    <img src="${item.image}"</div>
   `

    articleDiv.innerHTML += html;
});