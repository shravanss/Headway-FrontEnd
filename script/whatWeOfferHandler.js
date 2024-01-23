

// var jobPostingsContent = "<ul><li>Wanna bring in Right set of talent to join your workforce? Then Headway's Job platform exactly serves your need.</li><li>Post your openings and our wide range of talent pool will be notified about the posting.</li></ul>";
// var hiringThroughProfilesContent = "Prefer to take a close look into the candidate profiles?";
// var bulkHiringContent = "Multiple open job positions & looking for Right talent to fit into all of them? Seems like a tough task for sure.";

// const jobPosting=document.querySelector('#job-postings');
// const hiringProfiles=document.querySelector('#hiring-through-profiles');
// const bulkHiring=document.querySelector('#bulk-hiring');
// const whatOfferContent=document.querySelector('#job-postings-text');

// hiringProfiles.addEventListener("click", function(){
//     jobPosting.classList.remove('what-offer-selected');
//     bulkHiring.classList.remove('what-offer-selected');
//     hiringProfiles.classList.add('what-offer-selected');
//     whatOfferContent.innerHTML=hiringThroughProfilesContent;
// });

// jobPosting.addEventListener("click", function(){
//     bulkHiring.classList.remove('what-offer-selected');
//     hiringProfiles.classList.remove('what-offer-selected');
//     jobPosting.classList.add('what-offer-selected');
//     whatOfferContent.innerHTML=jobPostingsContent;
// });

// bulkHiring.addEventListener("click", function(){
//     bulkHiring.classList.add('what-offer-selected');
//     jobPosting.classList.remove('what-offer-selected');
//     hiringProfiles.classList.remove('what-offer-selected');
//     whatOfferContent.innerHTML=bulkHiringContent;
// });

var jobPostingsContent = "<ul><li>Wanna bring in the right set of talent to join your workforce? Then Headway's Job platform exactly serves your need.</li><li>Post your openings and our wide range of talent pool will be notified about the posting.</li><li>Attract a large number of applications along with finding apt candidates for the job.</li><li>Get them all at the best cost per post</li></ul>";
var hiringThroughProfilesContent = "<ul><li>Prefer to take a close look into the candidate profiles?</li><li>You can check the Profiles of the candidates and Save time by hiring directly.</li><li>Surf through the profiles of Individuals, Connect with them directly and make the best pick that suits your Job role</li><li>Get them all at unbeatable price per Profile.</li></ul>";
var bulkHiringContent = "<ul><li>Multiple open job positions & looking for the right talent to fit into all of them? Seems like a tough task for sure.</li><li>Headway's bulk hiring program is designed in a way to accurately gauge the hiring needs and help companies fill large number of job openings quickly and efficiently.</li><li>If you are looking for skilled resources & planning to conduct a Bulk hiring drive, then Headway is your way.</li></ul>";

const jobPosting = document.querySelector('#job-postings');
const hiringProfiles = document.querySelector('#hiring-through-profiles');
const bulkHiring = document.querySelector('#bulk-hiring');
const whatOfferContent = document.querySelector('#job-postings-text');

// Set the content when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    whatOfferContent.innerHTML = jobPostingsContent;
});

hiringProfiles.addEventListener("click", function () {
    jobPosting.classList.remove('what-offer-selected');
    bulkHiring.classList.remove('what-offer-selected');
    hiringProfiles.classList.add('what-offer-selected');
    whatOfferContent.innerHTML = hiringThroughProfilesContent;
});

jobPosting.addEventListener("click", function () {
    bulkHiring.classList.remove('what-offer-selected');
    hiringProfiles.classList.remove('what-offer-selected');
    jobPosting.classList.add('what-offer-selected');
    whatOfferContent.innerHTML = jobPostingsContent;
});

bulkHiring.addEventListener("click", function () {
    bulkHiring.classList.add('what-offer-selected');
    jobPosting.classList.remove('what-offer-selected');
    hiringProfiles.classList.remove('what-offer-selected');
    whatOfferContent.innerHTML = bulkHiringContent;
});
