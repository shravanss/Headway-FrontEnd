const applyNowBtn=document.querySelector('#apply-now-btn');
const confirmApplyPopupBg=document.querySelector('.application-submit-confirm-popup-bg');
const confirmApplyPopupCloseBtn=document.querySelector('.application-submit-confirm-close');


applyNowBtn.addEventListener("click", function(){
    console.log("Clicked");
    confirmApplyPopupBg.classList.remove('hidden');
});

confirmApplyPopupCloseBtn.addEventListener("click", function(){
    confirmApplyPopupBg.classList.add('hidden');
});