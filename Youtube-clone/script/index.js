const menuBtn=document.querySelector('#menu-bar');
const menuBtn2=document.querySelector('#menu-bar2');
const sidebar=document.querySelector('.side-bar');
const suggest=document.querySelector('.suggest');
const navLeft=document.querySelector('header');
const body=document.querySelector('body');
const mainContainer=document.querySelector('.main-container');

body.addEventListener('click',(e)=>{
    e.stopPropagation();
    sidebar.classList.remove('m-active');
    body.classList.remove('b-active');
    
})

menuBtn.addEventListener('click',()=>{
   sidebar.classList.toggle('active');
   suggest.classList.toggle('a-submenu');
   mainContainer.classList.toggle('main-active');
})
menuBtn2.addEventListener('click',(e)=>{
    e.stopPropagation();
    sidebar.classList.add('m-active');
    body.classList.add('b-active');
    navLeft.classList.add('n-active');
})
document.addEventListener('DOMContentLoaded',()=>{
    //getThumbnail();
    getThumbnail2();
    loadData();
})
//load data
function loadData(){
    let videos=document.querySelectorAll('.video');
    videos.forEach((video)=>{
        video.addEventListener('click',()=>{
            let id=video.children[1].id;
            fetchData(id);
        })
    })
}
//fetch data
async function fetchData(id){
    let responce=await fetch('YoutubeVideo.json');
    let data=await responce.json();
    data.forEach(data =>{
        if(data.id==id){
            localStorage.setItem('Y2id',JSON.stringify(data));
        }
    })
}
//load thumbnails

async function getThumbnail(){
    let responce=await fetch('YoutubeThum.json')
    let thumbnails=await responce.json();
    thumbnails.forEach((thumb)=>{
        createThumb(thumb.img,thumb.title,thumb.logo,thumb.channelName);
    })
}
//insert thumb
function createThumb(img,title,logo,cname,id){
    let div=document.createElement('a');
    div.href='about.html';
    div.className='video';
    div.innerHTML=`
    <div class="thumb">
             <img src="${img}">
        </div>
        <div class="video-details" id='${id}'>
            <div class="chennal-logo">
                <img src="${logo}">
             </div>
        <div class="chennal-details">
           <h2>${title}</h2>
          <p>${cname}</p>
        </div>
        <span><ion-icon name="ellipsis-vertical"></ion-icon></span>
    </div>
    `;
    mainContainer.append(div);
}
function getThumbnail2(){
    let thumb2=`
    [
        {
            "img":"https://i.ytimg.com/vi/tfN9gPFmUfA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDcg_Wwp0qQ8nQzi2p68K_5One1_A",
            "title":"HTML Tutorial for beginners in Tamil | HTML full course with example | Basic to website creation",
            "logo":"https://yt3.ggpht.com/d8kYE1c2rp8m9AiF1-CpIWes0P_PSuRK8R2PjEdLWH9tcPMf07xOE84uSTxL4EbUVXwNhgnPfw=s176-c-k-c0x00ffffff-no-rj-mo",
            "channelName":"Error Make Claver",
            "id":1
        },
        {
            "img":"https://i.ytimg.com/vi/FYErehuSuuw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwhTxmXO1NPbmZWWUcvlQM7dZM8Q",
            "title":"Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development 💻 in Tamil | EMC",
            "logo":"https://yt3.googleusercontent.com/ytc/AOPolaThyq1mBMiycOxp3J2Tk0hj7KhMh1WtbSackKAL=s176-c-k-c0x00ffffff-no-rj-mo",
            "channelName":"Cs in Tamil",
            "id":2
        },
        {
            "img":"https://i.ytimg.com/an_webp/Oes56FoYABc/mqdefault_6s.webp?du=3000&sqp=CPL3i6gG&rs=AOn4CLAFDudujmSUNrhvCjrqpcDYxcEHvw",
            "title":"Learn Complete HTML Tutorial In Tamil | தமிழ்",
            "logo":"https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s176-c-k-c0x00ffffff-no-rj-mo",
            "channelName":"Tutor Joes's",
            "id":3
        },
        {
            "img":"https://i.ytimg.com/an_webp/8xpEuu0s1A4/mqdefault_6s.webp?du=3000&sqp=COzVi6gG&rs=AOn4CLDABX_wzu7xziTVTJ6CkJV_Aw6YhQ",
            "title":"CSS Complete Tutorial in Tamil |  CSS in Tamil | தமிழ் | Tutor Joes",
            "logo":"https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s176-c-k-c0x00ffffff-no-rj-mo",
            "channelName":"Tutor Joes's",
            "id":4
        },
        {
            "img":"https://i.ytimg.com/an_webp/tfN9gPFmUfA/mqdefault_6s.webp?du=3000&sqp=CODti6gG&rs=AOn4CLCoRn2jAaCfgIr4BAt-EpcCZCzT0Q",
            "logo":"https://yt3.googleusercontent.com/ytc/AOPolaTQs8gEdLsxC6FL845AY7BCTkBAH8vYtrnaGlbt=s176-c-k-c0x00ffffff-no-rj-mo",
            "title":"CSS Grids Complete Tutorial | HTML and CSS Course | Logic First Tamil",
            "channelName":"Logic First Tamil",
            "id":5
        },
        {
            "img":"https://i.ytimg.com/an_webp/VN9hkmTvq3Y/mqdefault_6s.webp?du=3000&sqp=CMLwi6gG&rs=AOn4CLCuzJ4JGf1P5Ewo3ERdlOS0Lr4v3g",
            "title":"CSS Grid in Tamil | CSS Flex Box in Tamil  | Advance CSS Properties in CSS | Tutor Joes",
            "logo":"https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s176-c-k-c0x00ffffff-no-rj-mo",
            "channelName":"Tutor Joes's",
            "id":6
        },
        {
            "img":"https://i.ytimg.com/an_webp/auO7S_SKIfY/mqdefault_6s.webp?du=3000&sqp=CLD8i6gG&rs=AOn4CLABSoqpQNc8_DPLHwW1klGNzXjTuA",
            "title":"HTML Tutorial for beginners in Tamil | HTML full course with example | Basic to website creation",
           "logo":"https://yt3.ggpht.com/lMqV4Au-V6YjSRCLR14LeXMoMR1n5e6BCIaiy6QLKEugBZ2bvVcar9EOiZm1z2PJ3zHclmy2=s176-c-k-c0x00ffffff-no-rj-mo",
           "channelName":"Balachndra",
           "id":7
        }
    ]`;
    let data=JSON.parse(thumb2);
    console.log(data);
    data.forEach((thumb)=>{
        createThumb(thumb.img,thumb.title,thumb.logo,thumb.channelName,thumb.id);
    })
}