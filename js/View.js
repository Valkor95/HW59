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
        })
        this.divContainer.append(ul)
    },



}

export default View