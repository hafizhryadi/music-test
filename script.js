document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        { title: 'Song 1', link: 'https://drive.google.com/file/d/1F6oP2sfGiBhcSj7wOd5HyL2tAF5w7Bsq/view?usp=sharing' },
        { title: 'Song 2', link: 'https://drive.google.com/file/d/1F6oP2sfGiBhcSj7wOd5HyL2tAF5w7Bsq/view?usp=sharing' },
        // Tambahkan lebih banyak lagu di sini
    ];

    const songList = document.getElementById('songList');

    // Tambahkan lagu ke dalam daftar
    songs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${song.title}</h5>
                    <audio class="audio-player" controls>
                        <source src="${song.link}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        `;
        songList.appendChild(card);
    });
});