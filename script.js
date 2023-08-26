
const sounds = ['abertura', 'Abertura 2', 'Abertura 3','Abertura 4','Abertura 5','Abertura 1 (Evento)', 'Abertura 2 (Evento)', 'Abertura 3 (Evento)','Abertura 4','Carimbo 1', 'Carimbo 2', 'Carimbo 3', 'Carimbo 4','Carimbo 5 (Evento)', 'Carimbo 6 (Evento)', 'Carimbo 7 (Evento)', 'Ponte 1', 'Ponte 2','Ponte 3', 'Ponte 4', 'Ponte 5 (Evento)', 'Ponte 6 (Evento)'];;


sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}