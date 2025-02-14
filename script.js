document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const playButtons = document.querySelectorAll('.play-btn');
    const uploadForm = document.getElementById('upload-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Play button functionality
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const trackSrc = button.getAttribute('data-track');
            audioPlayer.src = trackSrc;
            audioPlayer.play();
        });
    });

    // Upload form functionality
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('track-title').value;
        const genre = document.getElementById('track-genre').value;
        const file = document.getElementById('track-file').files[0];

        // Here you would typically send this data to a server
        console.log('Uploading track:', { title, genre, file });
        alert('Track uploaded successfully!');
        uploadForm.reset();
    });

    // Logout functionality
    logoutBtn.addEventListener('click', () => {
        // Here you would typically handle the logout process
        console.log('User logged out');
        alert('You have been logged out.');
    });

    // Simulate user login (replace with actual login system)
    const userName = 'John Doe';
    document.getElementById('user-name').textContent = userName;
});
