import Component from "../Component";
import './Auido.css';
import Html from'./Audio.html';

class Audio extends Component{
    div;
    audio;
    audioSource;
    src;

    constructor (src){
        super(Html);
        this.src = src;
        this.render();
        this.renderAfter();
    }
    renderAfter(){
        this.div = document.querySelector('#audioDiv');
        this.audioSource = document.querySelector('#audio');
        this.audio = this.div.querySelector('audio');
        this.audioSource.src = this.src;

        this.audio.play();
        //传入常量并且给定回调
    }
}

export default Audio;