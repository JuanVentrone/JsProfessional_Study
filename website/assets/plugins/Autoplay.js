function Autoplay(){
    Autoplay.prototype.run= function(player){
       if (!player.mute()){
        player.muted(true);
       }else{
        player.play();
       }
    };
}
export default Autoplay;