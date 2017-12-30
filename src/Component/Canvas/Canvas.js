import Component from "../Component";
import './Canvas.css';
import Html from './Canvas.html';


class Canvas extends Component{

    canvas = false;
    context = false;

    constructor(){
        super(Html);
        this.render();
        this.div = document.querySelector('#canvas');
        this.canvas = this.div.children[0];
        //获取context
        this.canvas.width = this.div.clientWidth;
        this.canvas.height = this.div.clientHeight;
        this.context = this.canvas.getContext('2d');
    }
    getCanvasRect(){
        return this.canvas.getBoundingClientRect();
    }
    renderLine(line) {
        this.context.moveTo(line.start.x , line.start.y);
        this.context.lineTo(line.end.x , line.end.y);
        this.context.lineWidth = line.lineWidth;
        this.context.strokeStyle = line.lineColor;
        this.context.stroke();
    }
    clear(){
        // this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.canvas.width = this.canvas.width;
    }
}

export default Canvas;