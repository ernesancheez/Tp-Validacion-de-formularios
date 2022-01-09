window.addEventListener('load', function(){
    let form = document.querySelector('#form');
    let $ = id => document.getElementById(id);
    

    $('title').focus();


    /*------ Validacion : title ------ */
    $('title').addEventListener('focus', function(){
        $('info-title').innerText = 'Escriba el título de la peícula';
        $('info-title').style.color = 'teal';
        $('error-title').innerText = null;
    })

    $('title').addEventListener('blur', function(){
        if(!this.value){
            $('error-title').innerText = 'Este campo es obligatorio';
            $('error-title').style.color = 'tomato';
            $('info-title').innerText = null;
            this.classList.add('is-invalid')
        }else{
            $('error-title').innerText = null;
            $('info-title').innerText = null;
            this.classList.add('is-valid')
        }
    })

    $('title').addEventListener('keydown', function(){
        $('error-title').innerText = null;
    })

    /*------ Validacion : rating ------ */
    $('rating').addEventListener('focus', function(){
        $('info-rating').innerText = 'Califique esta película';
        $('info-rating').style.color = 'teal';
        $('error-rating').innerText = null;
    })

    $('rating').addEventListener('blur', function(){
        if(!this.value){
            $('error-rating').innerText = 'Este campo el obligatorio';
            $('error-rating').style.color = 'tomato';
            $('info-rating').innerText = null;
            this.classList.add('is-invalid')
        }else if(this.value < 0 || this.value > 10){
            $('error-rating').innerText = 'Dede ser un valor entre 0 y 10';
            $('error-rating').style.color = 'tomato';
            $('info-rating').innerText = null;
            this.classList.add('is-invalid')
        }else{
            $('error-rating').innerText = null;
            $('info-rating').innerText = null;
            this.classList.add('is-valid')
        }
    })

    $('rating').addEventListener('keydown', function(){
        $('error-rating').innerText = null;
    })

     /*------ Validacion : awards ------ */
     $('awards').addEventListener('focus', function(){
        $('info-awards').innerText = 'Indique cuanto premios tuvo la película';
        $('info-awards').style.color = 'teal';
        $('error-awards').innerText = null;
    })

    $('awards').addEventListener('blur', function(){
        if(!this.value){
            $('error-awards').innerText = 'Este campo el obligatorio';
            $('error-awards').style.color = 'tomato';
            $('info-awards').innerText = null;
            this.classList.add('is-invalid')
        }else if(this.value < 0 || this.value > 10){
            $('error-awards').innerText = 'Dede ser un valor entre 0 y 10';
            $('error-awards').style.color = 'tomato';
            $('info-awards').innerText = null;
            this.classList.add('is-invalid')
        }else{
            $('error-awards').innerText = null;
            $('info-awards').innerText = null;
            this.classList.add('is-valid')
        }
    })

    $('awards').addEventListener('keydown', function(){
        $('error-awards').innerText = null;
    })


    /*------ Validacion : release_date ------ */
    $('release_date').addEventListener('focus', function(){
        $('info-release_date').innerText = 'Indique cuando se estrenó la película';
        $('info-release_date').style.color = 'teal';
        $('error-release_date').innerText = null;
    })

    $('release_date').addEventListener('blur', function(){
        if(!this.value){
            $('error-release_date').innerText = 'Este campo el obligatorio';
            $('error-release_date').style.color = 'tomato';
            $('info-release_date').innerText = null;
            this.classList.add('is-invalid')
        }else{
            $('error-release_date').innerText = null;
            $('info-release_date').innerText = null;
            this.classList.add('is-valid')
        }
    })

    $('release_date').addEventListener('keydown', function(){
        $('error-release_date').innerText = null;
    })


    /*------ Validacion : length ------ */
    $('length').addEventListener('focus', function(){
        $('info-length').innerText = 'Indique la duración de la película';
        $('info-length').style.color = 'teal';
        $('error-length').innerText = null;
    })

    $('length').addEventListener('blur', function(){
        if(!this.value){
            $('error-length').innerText = 'Este campo el obligatorio';
            $('error-length').style.color = 'tomato';
            $('info-length').innerText = null;
            this.classList.add('is-invalid')
        }else if(this.value < 60 || this.value > 360){
            $('error-length').innerText = 'Dede ser un valor entre 60 y 360';
            $('error-length').style.color = 'tomato';
            $('info-length').innerText = null;
            this.classList.add('is-invalid')
        }else{
            $('error-length').innerText = null;
            $('info-length').innerText = null;
            this.classList.add('is-valid')
        }
    })

    $('length').addEventListener('keydown', function(){
        $('error-length').innerText = null;
    })

    /*------ Validacion : genre ------ */
    $('genre').addEventListener('focus', function(){
        $('info-genre').innerText = 'Indique el género de la película';
        $('info-genre').style.color = 'teal';
        $('error-genre').innerText = null;
    })

    $('genre').addEventListener('blur', function(){
        if(!this.value){
            $('error-genre').innerText = 'Este campo el obligatorio';
            $('error-genre').style.color = 'tomato';
            $('info-genre').innerText = null;
            this.classList.add('is-invalid')
        }else{
            $('error-genre').innerText = null;
            $('info-genre').innerText = null;
            this.classList.add('is-valid')
        }
    })

    $('genre').addEventListener('keydown', function(){
        $('error-genre').innerText = null;
    })

   

    form.addEventListener('submit', function(e){
        e.preventDefault();

        var error = false;

        let formElements = form.elements

        for (let i = 0; i < formElements.length - 1; i++) {
            if(!formElements[i].value){
                formElements[i].classList.add('is-invalid');
                $('error-form').innerText = "Todos los campos obligatorios";
                $('error-form').style.color = 'tomato';
                $('error-form').style.marginBottom = '10px';
                error = true;
            }          
        }

        if(!error){
            alert('La película se guardó satisfactoriamente')
            this.submit()
        }

    })
})