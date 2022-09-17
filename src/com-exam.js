import { LitElement,css,html} from "lit";

export class comExamn extends LitElement{

    static get properties(){
        return {
            message : {type:String},
            myArray : {type:Array},
            myBool : {type:Boolean},
            myString : {type:String}
        };
    }

    static get styles(){
        return css`
            p{
                font-family:Roboto;
                font-size:20px;
                font-weight:500;
                color:greenyellow;
                background-color:black;

            }
            .fuchsia{
                color:fuchsia;

            }
            .cyan{
                color: cyan;
            }
            .amarillo{
                color:yellow;
            }
        `;
    }

    constructor (){
        super();
        this.myBool = false;
        this.myString = 'amarillo';
    }

    render(){
     return   html `
            <p> Soy un texto uno </p>
            <p  class="${this.myBool?'fuchsia':'cyan'}"> Soy texto dos </p>
            <p class= "${this.myString}"> soy texto tres</p>
            <button @click= "${this.clickHandler}"> click </button>
        `;
    }

    clickHandler(){
        this.myBool = !this.myBool;
    }

}