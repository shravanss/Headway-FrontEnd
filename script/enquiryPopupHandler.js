const knowMoreBtn=document.querySelector('#knowmore-btn');
const enquiryPopupBg=document.querySelector('.enquiry-form-bg');
const enquiryPopupCloseBtn=document.querySelector('.enquiry-popup-close-btn');


knowMoreBtn.addEventListener("click", function(){
    enquiryPopupBg.classList.remove('hidden');
});

enquiryPopupCloseBtn.addEventListener("click", function(){
    enquiryPopupBg.classList.add('hidden');
});
