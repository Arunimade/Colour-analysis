// script.js
document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected color value
    const color = document.getElementById('colorSelect').value;
    const resultDiv = document.getElementById('result');
    let personalityTrait = '';

    // Determine personality based on color
    switch (color) {
        case '#ff0000': // Red
            personalityTrait = 'You are passionate, energetic, and a natural leader.';
            break;
        case '#0000ff': // Blue
            personalityTrait = 'You are calm, trustworthy, and value harmony.';
            break;
        case '#008000': // Green
            personalityTrait = 'You are balanced, nurturing, and value stability.';
            break;
        case '#ffff00': // Yellow
            personalityTrait = 'You are cheerful, optimistic, and love to spread joy.';
            break;
        case '#ffa500': // Orange
            personalityTrait = 'You are creative, enthusiastic, and love adventure.';
            break;
        case '#800080': // Purple
            personalityTrait = 'You are imaginative, wise, and value individuality.';
            break;
        default:
            personalityTrait = 'You have a unique personality that blends different traits!';
    }

    // Display the result
    resultDiv.textContent = personalityTrait;
});
