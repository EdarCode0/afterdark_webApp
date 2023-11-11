import music1 from '../music/Monolink - Return To Oz (ARTBAT Remix).mp3';
import music2 from '../music/music2.mp3';
import music3 from '../music/music3.mp3';
import artbat from "../assets/images/artbat.png";
import club2Image from "../assets/images/club2.jpeg";
import club3Image from "../assets/images/club3.jpeg";

const playlist = {
  songs: [
    {
      name: "Return to Oz",
      artist: "ARTBAT",
      img: artbat,
      audio: music1,
    },
    {
      name: "test",
      artist: "test",
      img: club2Image,
      audio: music2,
    },
    {
      name: "test2",
      artist: "test2",
      img: club3Image,
      audio: music3,
    },
  ],
};

export default playlist;
