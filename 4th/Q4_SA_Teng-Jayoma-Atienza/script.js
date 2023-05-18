const correctAnswers = ['c', 'c', 'e', 'e', 'e', 'a', 'd', 'd', 'b', 'e', 'a', 'c', 'a', 'd', 'b', 'c^2', '0.75', '15', '-6', '(2.5, 0)'];
const form = document.getElementById('questionaire');
const userAnswers = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    

    // Collect the user's answers
    userAnswers.length = 0; // Clear the previous user answers
    userAnswers.push(
        form.elements.Q1.value,
        form.elements.Q2.value,
        form.elements.Q3.value,
        form.elements.Q4.value,
        form.elements.Q5.value,
        form.elements.Q6.value,
        form.elements.Q7.value,
        form.elements.Q8.value,
        form.elements.Q9.value,
        form.elements.Q10.value,
        form.elements.Q11.value,
        form.elements.Q12.value,
        form.elements.Q13.value,
        form.elements.Q14.value,
        form.elements.Q15.value,
        form.elements.Q16.value,
        form.elements.Q17.value,
        form.elements.Q18.value,
        form.elements.Q19.value,
        form.elements.Q20.value
    );

    // Compare the user's answers to the correct answers and provide feedback
    let mcscore = 0;
    let fitbscore = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        const feedback = document.getElementById(`feedback${i + 1}`);
        const input = form.querySelector(`input[name='Q${i + 1}']`);
        if (input.type === 'radio') { // Multiple choice question
            if (userAnswers[i] === correctAnswers[i]) {
                feedback.textContent = 'Correct!';
                feedback.style.color = 'green';
                feedback.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.3)';
                feedback.style.display = 'block';
                mcscore++;
            } else {
                feedback.textContent = 'Incorrect. The correct answer is ' + correctAnswers[i] + '.';
                feedback.style.color = 'red';
                feedback.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.3)';
                feedback.style.display = 'block';
            }
        } else if (input.type === 'text') { // Fill-in-the-blank question
            const userAnswer = userAnswers[i].toLowerCase().trim();
            const correctAnswer = correctAnswers[i].toLowerCase().trim();
            if (userAnswer === correctAnswer) {
                feedback.textContent = 'Correct!';
                feedback.style.color = 'green';
                feedback.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.3)';
                feedback.style.display = "block";
                fitbscore++;
            } else {
                feedback.textContent = 'Incorrect. The correct answer is ' + correctAnswers[i] + '.';
                feedback.style.color = 'red';
                feedback.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.3)';
                feedback.style.display = "block";
            }
        }
    }

    const inputs = form.querySelectorAll("input[type='radio']");
    const tinput = form.querySelectorAll("input[type='text']");

    tinput.forEach((input) => {
        input.disabled = true;
        });

    inputs.forEach((input) => {
        input.disabled = true;
    });

    // Display the user's score
    let score = mcscore + fitbscore;
    document.getElementById('mcscore').textContent = `: ${mcscore} out of 15`;
    document.getElementById('fitbscore').textContent = `: ${fitbscore} out of 5`;
    document.getElementById('score').textContent = `: ${score} out of 20`;
});

function resetForm() {
    window.location.reload();
  };
