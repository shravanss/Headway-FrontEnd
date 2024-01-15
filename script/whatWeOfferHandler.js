var jobPostingsContent = "This is the dummy content for Job Postings.";
var hiringThroughProfilesContent = "This is the dummy content for Hiring Through Profiles.";
var bulkHiringContent = "This is the dummy content for Bulk Hiring.";

const jobPosting=document.querySelector('#job-postings');
const hiringProfiles=document.querySelector('#hiring-through-profiles');
const bulkHiring=document.querySelector('#bulk-hiring');
const whatOfferContent=document.querySelector('#job-postings-text');

hiringProfiles.addEventListener("click", function(){
    jobPosting.classList.remove('what-offer-selected');
    bulkHiring.classList.remove('what-offer-selected');
    hiringProfiles.classList.add('what-offer-selected');
    whatOfferContent.innerHTML=hiringThroughProfilesContent;
});

jobPosting.addEventListener("click", function(){
    bulkHiring.classList.remove('what-offer-selected');
    hiringProfiles.classList.remove('what-offer-selected');
    jobPosting.classList.add('what-offer-selected');
    whatOfferContent.innerHTML=jobPostingsContent;
});

bulkHiring.addEventListener("click", function(){
    bulkHiring.classList.add('what-offer-selected');
    jobPosting.classList.remove('what-offer-selected');
    hiringProfiles.classList.remove('what-offer-selected');
    whatOfferContent.innerHTML=bulkHiringContent;
});