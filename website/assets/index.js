import MediaPlayer from './MediaPlayer.js';
import Autoplay from "./plugins/Autoplay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video,plugins :[new Autoplay(),new AutoPause()] });

const button = document.querySelector('button');
const button_mute=document.querySelector("#muteButton");


button.onclick = () => player.togglePlay();
button_mute.onclick = () =>player.toggleMute();

if("serviceWorker"in navigator){
    navigator.serviceWorker.register("/sw.js").catch(error=>{
        console.log(error.message);
    });
}