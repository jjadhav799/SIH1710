window.onload = function() {
    const welcomeMessage = document.getElementById('welcome-message');
    const trainButton = document.getElementById('train-button');
    const trainLogo = document.getElementById('train-logo');

    // Show welcome message after train animation
    setTimeout(() => {
        welcomeMessage.style.display = 'block'; // Show welcome message
        showTrainButton(); // Show train button
    }, 4000); // Match this with the animation duration

    // Function to show train button
    function showTrainButton() {
        trainButton.style.display = 'flex'; // Show train button
        trainButton.style.flexDirection = 'column'; // Stack text below logo
    }

    // Add click event to train button
    trainButton.addEventListener('click', function() {
        alert('Your journey begins now!'); // Replace with actual navigation or action
        // You can redirect to another page or trigger another function here.
    });
};
