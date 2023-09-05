const form = document.querySelector('form');
//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        result.textContent = `${height}: Please enter a valid height.`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.textContent = `${weight}: Please enter a valid weight.`
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        //showing result
        result.innerHTML = `<span>${bmi}</span>`

        if(bmi < 18.6){
            res.innerHTML = `Under weight`
        }
        else if(bmi > 18.6 && bmi < 24.9){
            res.innerHTML = `Normal`
        }
        else if(bmi > 24.9){
            res.innerHTML = `Over weight`
        }
    }
});