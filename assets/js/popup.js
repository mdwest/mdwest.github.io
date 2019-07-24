(function(){
    let openTime = 1;
    let lifeTime = 5;
    let popUpWindow = document.querySelector('.popup-window');
    let popUpClose = document.querySelector('.popup-close');
    popUpClose.addEventListener('click',(lifeTime)=>{
        closePopup(lifeTime);
    });
    openPopup(openTime);

    function openPopup(openTime){
        setTimeout(()=>{
            openAnimation();     
            closePopup(lifeTime); 
        }, openTime*1000);
    }

    function closePopup(lifeTime) {
        setTimeout(()=>{
            closeAnimation();      
        }, lifeTime*1000);
    }

    function closeAnimation() {
        popUpWindow.style.opacity = 0;
        setTimeout(()=>{
            popUpWindow.style.display = 'none';
        }, 800);
    }

    function openAnimation() {
        popUpWindow.style.display = 'block';
        setTimeout(()=>{
            popUpWindow.style.opacity = 1;
        }, 100);
    }
}());