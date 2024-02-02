const testimonials = [
            {
                text: "I extend my sincere appreciation for the excel certification workshop which was conducted. Appreciate the efforts of team Headway for an amazing ,  engaging and interactive session. I await for many such collaborations with Headway  in the future.",
                author: "Gayathri BJ",
                designation: "HOD, SDIT-MBA"
            },
            {
                text: "Had a wonderful experience attending the webinar. Need more such interactive sessions with industry experts so that we can get all the best inputs and make ourselves ready for the corporate world",
                author: "Darshan Bhat",
                designation: "MBA, 1st Year"
            },
            {
                text: "I have attended the webinar and it has been very useful to get insights of the corporate world. Thank you for pointing out my question to the speaker. Finance being my area of interest, looking forwards for more such sessions regarding job roles in the finance stream.",
                author: "Neha Sethunath",
                designation: "MBA, 1st Year"
            },
            {
                text: "I have been a part of the resume building workshop and it was the best resume building session I have come across. Thank you.",
                author: "Deepthi Bangera",
                designation: "BBA, 3rd Year"
            }
        ];

        let currentTestimonialIndex = 0;

function updateTestimonialContent() {
    const currentTestimonial = testimonials[currentTestimonialIndex];

    document.getElementById('testimonial-text').innerText = currentTestimonial.text;
    document.getElementById('testimonial-author-name').innerText = currentTestimonial.author;
    document.getElementById('testimonial-author-designation').innerText = currentTestimonial.designation;
}

function changeTestimonial(direction) {
    if (direction === 'prev') {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    } else if (direction === 'next') {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    }

    updateTestimonialContent();
}

document.querySelector('.test-move-button-left').addEventListener('click', function(event) {
    event.preventDefault();
    changeTestimonial('prev');
});

document.querySelector('.test-move-button-right').addEventListener('click', function(event) {
    event.preventDefault();
    changeTestimonial('next');
});

// Set interval for automated content change every 5 seconds
setInterval(function() {
    changeTestimonial('next');
}, 5000);

// Initial content update
updateTestimonialContent();