import Model from "./Model.js";
import View from "./View.js";

const Controller = {

    divContainer: document.querySelector('#app'),
    loadedHandler () {
        Model.checkData();
        const data = Model.getData();
        View.createTemplate(data);
    },

    removeHandler (event)  {
        const target = event.target.closest('li');
        const postId = Number(target.getAttribute('data-id'));
        const data = Model.getData();
        const indexItem = data.findIndex(item =>
            item.id === postId);
        data.splice(indexItem, 1);
        localStorage.setItem(data, JSON.stringify(data))
        target.remove()
    },

    init(){
        this.loadedHandler = this.loadedHandler.bind(this);


        this.setEvents()
    },

    setEvents(){
        document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this));
        this.divContainer.addEventListener('click', this.removeHandler);
    },

}

export default Controller
