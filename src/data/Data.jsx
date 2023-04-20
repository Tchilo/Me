import work2 from '../assets/projects/work-2.png';
import work5 from '../assets/projects/work5.png';
import media from '../assets/projects/media2.png';
import school from '../assets/projects/school.png';

const Data = [
  
  {
    title: 'Accessin Media Connect',
    img: media,
    id: 1,
    languages: ['React Js','TypeScript', 'Ruby on Rails',],
    liveLink: 'https://accessinmedia.com/',
    decription:'Accessin Media Connect is a startup company that provides transcription, captions, foreign subtitles, and translations as services to research institutions, universities & colleges, media houses & legal firms.'
  },
  
  {
    title: 'Accessin-code',
    img: school,
    id: 2,
    languages: ['React Js', 'TypeScript','Firebase','Cloudinary'],
    liveLink: 'https://accessincode.tech/',
    decription:'A Startup offering Coding and creative courses for kids between the ages of 8 to 16 years old. The curriculum being Scratch programming, HTML, CSS & JavaScript and Problem solving through simulations and games'
  },
  {
    title: 'Equalizer Landing Page',
    img: work2,
    id: 3,
    languages: ['Html', 'Sass', 'JavaScript', 'Parcel'],
    liveLink: 'https://equalizer-delta.vercel.app/',
    decription:'A Clone of the Equalizer Landing Page'
  },
 
  {
    title: 'Pod Landing Page',
    img: work5,
    id: 5,
    languages: ['Html', 'Sass', 'JavaScript', 'Parcel'],
    liveLink: 'https://pod-request-access.netlify.app/',
    decription:'A clone of Pod Landing Page'
  }

]

export const FindCard = (id) => {
  return Data.find((card) => {
    if (card.id == Number(id)) {
      return card
    }
  })
}

export default Data;

