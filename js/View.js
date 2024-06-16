const View = {

    divContainer: document.querySelector('#app'),

    createTemplate(data){

        const ul = document.createElement('ul');
        data.forEach(item => {
            const li = document.createElement('li');
            li.setAttribute('data-id', item.id);
            li.innerHTML = `<h1>${item.id} ${item.title}</h1>
                        <p>${item.body}</p>`;
            ul.append(li)

            ul.addEventListener('click', this.removeHandler);
        })
        this.divContainer.append(ul)
    },

    removeHandler (event)  {
         const target = event.target.closest('li');
         const postId = Number(target.getAttribute('data-id'));
         const data = getData();
         const indexItem = data.findIndex(item =>
             item.id === postId);
         data.splice(indexItem, 1);
         localStorage.setItem(dataKey, JSON.stringify(data))
         target.remove()
     },

}

export default View