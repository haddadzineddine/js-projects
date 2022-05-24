const apiUrl = "http://api.alquran.cloud/v1/";
const apiSurahAudio = "https://api.quran.com/api/v4/chapter_recitations/7";

const quranSeach = document.getElementById("quran-search");
const loader = document.querySelector(".loader");
const quranList = document.querySelector(".quran-list");
const audio = document.querySelector("audio");

let isPlaying = false

const getSurahs = async () => {
    const surahList = await fetch(apiUrl + "surah");
    const { data } = await surahList.json();
    return data;
}


const showLoader = () => {
    loader.style.display = "block";
}

const hideLoader = () => {
    loader.style.display = "none";
}

hideLoader();


window.addEventListener('keydown', async function (e) {

    const searchValue = quranSeach.value.toLowerCase();
    let result = [];


    if (e.key == 'Enter') {

        quranList.innerHTML = ""


        if (searchValue.length == 0) {
            return renderOnDom(result);
        }

        showLoader();
        const surahs = await getSurahs();
        hideLoader();

        result = surahs.filter(surah => {
            return surah.englishName.toLowerCase().includes(searchValue) ||
                surah.name.includes(searchValue)
        })


        renderOnDom(result);
    }

});


const renderOnDom = (result) => {

    if (result.length == 0) {
        quranList.innerHTML = ` 
            <div class="empty">No result !</div>
        `;
    }

    result.forEach(surah => {
        quranList.innerHTML += `
            <div class="card">
                <div class="surah">
                    <div onClick="runAudio(event,${surah.number})" class="quran-number" ><i data-surah="${surah.number}" class="fa-solid fa-play"></i></div>
                    <div class="surah-name">
                        <span class="english-name">${surah.englishName}</span>

                        <span class="english-name-translation">${surah.englishNameTranslation}</span>
                    </div>
                </div>
                <div class="surah-name">
                    <span class="arabic-name">${surah.name}</span>

                    <span class="aya-number"> ${surah.numberOfAyahs} Ayahs </span>
                </div>

                
            </div>
        `
    });
};




async function runAudio(event, surahNumber) {
    const surah = await fetch(apiSurahAudio + `/${surahNumber}`);
    const { audio_file } = await surah.json();

    const player = event.target.firstChild ?? event.target;


    loadSurah(audio_file.audio_url);

    if (isPlaying) {
        pauseSurah();
        player.classList.replace('fa-pause', 'fa-play');
        isPlaying = false;
        return;
    }

    player.classList.replace('fa-play', 'fa-pause');
    playSurah();
    isPlaying = true;
}


function playSurah() {
    audio.play();
}


function pauseSurah() {
    audio.pause();
}


function loadSurah(surahUrl) {
    audio.src = surahUrl;
}
