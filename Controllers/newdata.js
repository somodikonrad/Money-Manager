function setMaxDate(){
    let date = document.querySelector('#date');
    date.max =  new Date().toISOString().split("T")[0];
}

function getToday(){
    setTimeout(()=>{setMaxDate()}, 500);
}

function addSteps(){

    let valami = document.querySelector('#date');
    let steps = document.querySelector('#steps');
    let date = document.querySelector('#date');


    if (date.value == "" || steps.value == 0 ){
        showMessage("Nem adtál meg minden adatot!");
    }
    else{
        
                let data = {
                    userID : loggedUser.ID,	
                    date : date.value,	
                    steps : steps.value	
                }

                axios.post(`${serverURL}/items`, data).then((res)=>{
                    alert('A tétel rögzítve!');
                    date.value = null;
                    steps.value = 0;
                });
            }
        
    }


getToday();
