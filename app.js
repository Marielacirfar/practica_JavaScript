document.addEventListener('DOMContentLoaded', function () { //DOMContentLoaded es para que se cargue el script antes del HTML
    console.log('El DOM ya fue ejecutado')
    const title = document.getElementById('title');
    title.innerHTML = 'Cursos';

    const description = document.getElementById('description');
    description.innerHTML = 'Listado de cursos hechos en codigoFacilito';

    const button = document.querySelector('.btn.btn-danger')

    button.addEventListener('click', function (e) {

        console.log(e)

        //para que desaparezcan
        // title.style.display = 'none'
        //description.style.display = 'none'

        if (title.style.display != 'none') {
            title.style.display = 'none';
            description.style.display = 'none';

            // button.textContent = 'Mostrar' con esto manejamos el boton directamente
            //e.target.textContent = 'Mostrar' //con esto manejamos el evento por el target
            this.textContent = 'Mostrar'
        } else {
            title.style.display = 'block';
            description.style.display = 'block';

            //button.textContent = 'Ocultar'

            //e.target.textContent = 'Ocultar'
            this.textContent = 'Ocultar'

        }

    })
    button.addEventListener('mouseenter', function () {
        this.className = 'btn btn-primary'

    })
    button.addEventListener('mouseout', function () {
        this.className = 'btn btn-danger'

    })

    setTimeout(function (p1, p2, p3) {
        console.log(p1)
        console.log(p2)
        console.log(p3)

    }, 3000, 'argumento1', 'argumento2', 'argumento3')



    //no funciona el keycode dice funcion en desuso y da undefinedcon
    //const input = document.getElementById('input');
    //input.addEventListener('keydown', function (e) {
    //    console.log('tecla presionada : ' + e.key + ' con el código ' + e.code);
    //});
    const row = document.querySelector('.row')
    const form = document.getElementById('course-form')
    form.addEventListener('submit', function (e) { //el submit se hace sobre el formulario y no sobre el boton
        e.preventDefault();//previene que se recargue el formulariio y se vea lo escrito en la consola
        let title = document.getElementById('title-form').value;
        let description = document.getElementById('description-form').value;

        create_card(title, description)
    });
    /*function create_card_by_innerHTML(title, description) {
        let html = ` <div class="col-sm-6 col-md-4">\
                        <div class="thumbnail">\
                            <div class="caption">\
                                <h3 id="title_card">${title}</h3>
                                <p id="description_card">${description}</p>
                                <p>
                                    <a href="#" class="btn btn-danger"> Acción</a>
                                </p>

                            </div>

                        </div>

                    </div> `

        row.innerHTML += html

    }*/
    let div = null
    function create_card(title, description) {
        div = document.createElement('div');
        div.className = 'col-sm-6 col-md-4';

        let thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';

        let caption = document.createElement('div');
        caption.className = 'caption';

        let h3 = document.createElement('h3');
        h3.textContent = title;

        let p1 = document.createElement('p');
        p1.textContent = description;

        let p2 = document.createElement('p');
        let a = document.createElement('a');
        a.className = 'btn btn-danger';
        a.textContent = 'Eliminar';

        p2.addEventListener('click', delete_card)

        p2.appendChild(a);
        caption.appendChild(h3);
        caption.appendChild(p1);
        caption.appendChild(p2);

        thumbnail.appendChild(caption);
        div.appendChild(thumbnail);
        row.appendChild(div);

    }

    function delete_card(e) {
        //El padre y el elemento a eliminar (hijo)
        let ancestor = get_ancestors(e.target, 4)

        row.removeChild(ancestor);
    }

    function get_ancestors(ancestor, level) {

        if (level == 0) {
            return ancestor;
        }
        level--;
        return get_ancestors(ancestor.parentElement, level);

    }


    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function () {

        console.log('Cambio de valor')


    })
    let title_form = document.getElementById('title-form');
    title_form.addEventListener('change', function () {
        console.log('cambio valor del imput')
    })


    const element = document.querySelector('li');
    const list = document.querySelector('ul');
    element.addEventListener('click', function (e) {
        console.log('El primer elemento')
        e.stopPropagation(); //para detener la propagacion d elos elementos

    })

    list.addEventListener('click', function () {
        console.log('El segundo elemento')
    })
    /*const div_row = document.querySelector('.row');
    const div_container = document.querySelector('.container')
    const body = document.querySelector('body')

    element.addEventListener('click', show_messages)

    list.addEventListener('click', show_messages)
    div_row.addEventListener('click', show_messages)
    div_container.addEventListener('click', show_messages)
    body.addEventListener('click', show_messages)
*/
    for (let element of document.querySelectorAll('*')) {
        element.addEventListener('click', show_messages)
    }
    function show_messages(e) {
        console.log('Elemento actual: ' + this.tagName);
        console.log('Elemento que disparó el evento: ' + e.target.tagName)
        console.log('\n')

    }





})




