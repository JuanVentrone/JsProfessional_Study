import MediaPlayer from './MediaPlayer.js';
import Autoplay from "./plugins/Autoplay.js";

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video,plugins :[
    new Autoplay()
] });

const button = document.querySelector('button');
const button_mute=document.querySelector("#muteButton");


button.onclick = () => player.togglePlay();
button_mute.onclick = () =>player.toggleMute();