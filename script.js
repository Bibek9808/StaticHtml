//  Created By: Bibek Shrestha
//      Date: November 27, 2023 
// Define the correct answers for each question
const correctAnswers = {
    q1: 'c',
    q2: 'b',
    q3: 'a',
    q4: 'a',
    q5: 'b'
};

// Function to calculate the quiz results
function calculateResults() {
    let score = 0;

    // Loop through each question
    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);

        // Check if an option is selected for the current question
        if (selectedOption) {
            const userAnswer = selectedOption.parentElement.getAttribute('data-option');

            // Check if the selected option is the correct answer
            if (userAnswer === correctAnswers[`q${i}`]) {
                score++;
            }
        }
    }

    // Display the results
    document.getElementById('result-score').innerText = score;
    document.getElementById('results').style.display = 'block';
}

// Function to submit the quiz and calculate results
function submitQuiz() {
    calculateResults();
}
