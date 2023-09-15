const maincont=document.querySelector('.playlist');
const ifarame=document.querySelector('iframe');
const videoTitle=document.querySelector('#v-title');
document.addEventListener('DOMContentLoaded',()=>{
    let data=JSON.parse(localStorage.getItem('Y2id'));
    ifarame.src=data.videoSrc;
    videoTitle.innerText=data.titile;
    getTumb();
})
async function  getTumb(){
    let responce=await fetch('YoutubeThum.json')
    let data=await responce.json();
    data.forEach((dt)=>{
        console.log(dt);
        createElement(dt.img,dt.title,dt.channelName);
    })
}
function createElement(img,title,cname){
    let cont=`
     <div class="imgs">
        <img src="${img}" >
    </div>
    <div class="video-details">
         <h2>${title}</h2>
        <p>${cname}</p>
    </div>
    `;
    let div=document.createElement('div');
    div.className='video';
    div.innerHTML=cont;
    maincont.append(div);
    console.log(div);
}