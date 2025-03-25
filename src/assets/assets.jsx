import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import felix_music_player from './felix-music-player.png'
import clock_icon from './clock_icon.png'
import nathaniel_bassey_album from './nathaniel-bassey-the-names-of-God.png'
import dunsin_oyekan_album from './dunsin-oyekan-the-glory-experience.png'
import mercy_chinwo_album from './mercy-chinwo-satisfied.png'
import sinach_album from './sinach_omemma_album.png'
import mcm_album from './maverick-city-music-kingdom.png'
import sunmisola_album from './sunmisola-agbebi-yeshua.png'
import nathaniel_song_1 from './nathaniel-bassey-adonai.mp3'
import nathaniel_song_2 from './nathaniel-bassey-iba.mp3'
import nathaniel_song_3 from './nathaniel-bassey-ebenezer.mp3'
import nathaniel_image_1 from './nathaniel-bassey.png'
import dunsin_image_1 from './dunsin-oyekan.png'
import dunsin_song_1 from './dunsin-oyekan-ogo.mp3'
import dunsin_song_2 from './dunsin-oyekan-worthy-of-my-praise.mp3'
import dunsin_song_3 from './dunsin-oyekan-fragrance-to-fire.mp3'
import mercy_image_1 from './mercy-chinwo.png'
import mercy_song_1 from './mercy-chinwo-regular.mp3'
import mercy_song_2 from './mercy-chinwo-amazing-God.mp3'
import chill_beats from './chill_beats.jpg'
import happy_pic from './happy-pic.jpg'



export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    felix_music_player,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Gospel",
        image: nathaniel_bassey_album,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Gospel Hit",
        image: dunsin_oyekan_album,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Top 20 Gospel",
        image: mercy_chinwo_album,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Gospel",
        image: sinach_album,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Gospel Hits,",
        image: mcm_album,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: sunmisola_album,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Adonai",
        image: nathaniel_image_1,
        file:nathaniel_song_1,
        desc:"Glorify jesus with this song",
        duration:"8:31"
    },
    {
        id:1,
        name: "Ogo",
        image: dunsin_image_1,
        file:dunsin_song_1,
        desc:"Hallelujah to the lion and the lamb",
        duration:"10:53"
    },
    {
        id:2,
        name: "Regular",
        image: mercy_image_1,
        file:mercy_song_1,
        desc:"Your blessings are regular in my life",
        duration:"3:58"
    },
    {
        id:3,
        name: "Iba",
        image: chill_beats,
        file:nathaniel_song_2,
        desc:"Meditate and be filled with the hly spirit",
        duration:"10:25"
    },
    {
        id:4,
        name: "Worthy of my Praise",
        image: dunsin_image_1,
        file:dunsin_song_2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"13:28"
    },
    {
        id:5,
        name: "Amazing God",
        image: happy_pic,
        file:mercy_song_2,
        desc:"Worship the amazing God",
        duration:"4:56"
    },
    {
        id:6,
        name: "Ebenezer",
        image: nathaniel_image_1,
        file:nathaniel_song_3,
        desc:"Give praise to the stone of help",
        duration:"8:31"
    },
    {
        id:7,
        name: "Fragrance to fire",
        image: dunsin_image_1,
        file:dunsin_song_3,
        desc:"The fragrance of fire is a sweet smell",
        duration:"10:57"
    }
]