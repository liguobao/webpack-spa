import Audio from "../Component/Audio/Audio";
import src from "../static/Cranky - Libera Me.mp3";
import Canvas from "../Component/Canvas/Canvas";
import Line from "../Component/Canvas/CanvasElement/Line";
import Point from "../Component/Canvas/CanvasElement/Point";
import AudioContext from "../Component/AudioCanvas/AudioContext";

class AudioCanvasTest {
    audio;
    canvas;

    constructor (){
        this.audio = new Audio(src);
        this.canvas = new Canvas();
        this.after();
    }
    after(){
        const {width , height} = this.canvas.getCanvasRect();

        const lineWidth = 7;
        const lineMargin = 15;
        const lineColor = "#97ffaf";
        const lineBottom = height*0.95;
        let draw = (arr) => {
            arr.forEach((item , index) => {
                const lineHeight = (item !== 0)? (item/255)*height*0.90 : 0;
                const lineX = (lineWidth+lineMargin)*(index+1);
                const lineTop = lineBottom-lineHeight;
                const line = new Line(new Point(lineX,lineTop) , new Point(lineX,lineBottom) , lineWidth , lineColor);
                this.canvas.renderLine(line);
            })
        };


        new AudioContext(this.audio.audio , 64 , (arr)=>{
            this.canvas.clear();
            draw(arr);
        });
    }
}

export default AudioCanvasTest;