import Model from "./Model.js";
import View from "./View.js";

const Controller = {


    loadedHandler () {
        Model.checkData();
        const data = Model.getData();
        View.createTemplate(data);
        View.removeHandler(data)
    },

    init(){
        this.loadedHandler = this.loadedHandler.bind(this)

        this.setEvents()
    },

    setEvents(){
        document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this))
    },

}

export default Controller
