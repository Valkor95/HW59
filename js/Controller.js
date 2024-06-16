import Model from "./Model.js";
import View from "./View.js";

const Controller = {
    // removeHandler (event)  {
    //      const target = event.target.closest('li');
    //      const postId = Number(target.getAttribute('data-id'));
    //      const data = getData();
    //      const indexItem = data.findIndex(item =>
    //          item.id === postId);
    //      data.splice(indexItem, 1);
    //      localStorage.setItem(dataKey, JSON.stringify(data))
    //      target.remove()
    //  },

    loadedHandler () {
        Model.checkData();
        const data = Model.getData();
        View.createTemplate(data)
    },

    init(){
        this.loadedHandler = this.loadedHandler.bind(this)
    },

    setEvents(){
        document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this))
    },

}

export default Controller
