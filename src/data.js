import tong from './assets/img/tongariro.jpeg'
import abel from './assets/img/abel.jpeg'
import heaphy from './assets/img/heaphy.jpeg'
import kep from './assets/img/kepler.jpeg'
import waik from './assets/img/lake-waik.jpeg'
import milf from './assets/img/milford.jpeg'
import papa from './assets/img/papa.jpeg'
import rak from './assets/img/rakiura.jpeg'
import rb from './assets/img/routeburn.jpeg'
import whang from './assets/img/whang.jpeg'

const data = [
  {
    title: 'Tongariro Northern Circuit',
    location: 'Central North Island',
    googleMapsUrl:
      'https://www.google.com/maps/place/Tongariro+Alpine+Crossing/@-39.1444144,175.3008217,10z/data=!4m10!1m2!2m1!1stongariro+national+park+new+zealand!3m6!1s0x6d6b0737ee1ef2c9:0x28660e6747262484!8m2!3d-39.1444144!4d175.5809731!15sCiN0b25nYXJpcm8gbmF0aW9uYWwgcGFyayBuZXcgemVhbGFuZJIBC2hpa2luZ19hcmVh4AEA!16s%2Fg%2F11bydkml02',
    distance: 44.9,
    duration: '3-4 days',
    type: 'loop',
    difficulty: 'Intermediate',
    description:
      'From late October to April, explore the volcanic heart of Tongariro National Park, a landscape of stark glacial contrasts and alpine views. From May to late October, it can be cold and wet, with ice, snow, avalanches and short daylight hours - only go if you have navigation and alpine skills.',
    imageUrl: tong,
  },
  {
    title: 'Abel Tasman Coast Track',
    location: 'Nelson/Tasman',
    googleMapsUrl:
      'https://www.google.com/maps/place/Abel+Tasman+National+Park/@-40.9050357,101.2483349,2z/data=!4m10!1m2!2m1!1sabel+tasman!3m6!1s0x6d3c6327542ee4bd:0xf00ef87655bee50!8m2!3d-40.9050357!4d172.9670849!15sCgthYmVsIHRhc21hbloNIgthYmVsIHRhc21hbpIBDW5hdGlvbmFsX3BhcmvgAQA!16zL20vMDMwY20z',
    distance: 60,
    duration: '3-5 days',
    type: 'one way',
    difficulty: 'Easy - Intermediate',
    description:
      'Enjoy the mild climate, golden beaches and lush coastal native bush on the Abel Tasman Coast Track.',
    imageUrl: abel,
  },
  {
  title: 'Heaphy Track',
  location: 'Nelson/Tasman, West Coast',
  googleMapsUrl:
    'https://www.google.com/maps/place/Kahurangi+National+Park/@-42.5652148,170.2897741,7z/data=!4m10!1m2!2m1!1sKahurangi+National+Park!3m6!1s0x6d3b5c5006f4ee47:0xf00ef87655bf040!8m2!3d-41.0985169!4d172.5350873!15sChdLYWh1cmFuZ2kgTmF0aW9uYWwgUGFya1oZIhdrYWh1cmFuZ2kgbmF0aW9uYWwgcGFya5IBDW5hdGlvbmFsX3BhcmuaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUTBhR0YxVm5SUlJSQULgAQA!16zL20vMDJfdzBf',
  distance: 78.4,
  duration: '4-6 days',
  type: 'one way',
  difficulty: 'Intermediate',
  description:
    'Travel through expansive tussock downs, lush forests and nīkau palms to the roaring seas of the West Coast. Mountain bikes are allowed between 1 May and 30 November.',
  imageUrl: heaphy,
},
{
  title: 'Kepler Track',
  location: 'Fiordland',
  googleMapsUrl:
    'https://www.google.com/maps/place/Kepler+Track,+Southland,+New+Zealand/@-46.5048581,163.1986437,5.86z/data=!4m5!3m4!1s0xa9d40436010f2a55:0x5f014f92eb9f9092!8m2!3d-45.4516028!4d167.5751134',
  distance: 60,
  duration: '3-4 days',
  type: 'loop',
  difficulty: 'Intermediate',
  description:
    'From late October to April, walk past the beech-forested shorelines of lakes Te Anau and Manapouri, to tussock-covered ridgelines with spectacular alpine vistas. From May to late October, it can be cold and wet, with ice, snow and short daylight hours - only attempt if you have alpine, navigation and river crossing skills.',
  imageUrl: kep,
},
{
  title: 'Lake Waikaremoana Track',
  location: 'East Coast',
  googleMapsUrl:
    'https://www.google.com/maps/place/Lake+Waikaremoana/@-46.5048581,163.1986437,4z/data=!4m10!1m2!2m1!1sLake+Waikaremoana+Track!3m6!1s0x6d68d0201698c4c9:0x2a00ef6165e1db00!8m2!3d-38.7745378!4d177.1123564!15sChdMYWtlIFdhaWthcmVtb2FuYSBUcmFja1oZIhdsYWtlIHdhaWthcmVtb2FuYSB0cmFja5IBBGxha2WaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTmhOM1pZYVdGQkVBReABAA!16zL20vMDRjeXRx',
  distance: 46,
  duration: '3-4 days',
  type: 'one way',
  difficulty: 'Intermediate',
  description:
    'Lake Waikaremoana is part of the Great Walk family. You’ll find this one more of a backcountry, off the beaten track experience. Be immersed into stunning natural wilderness and welcomed into the homeland of Ngai Tūhoe.',
  imageUrl: waik,
},
{
  title: 'Milford Track',
  location: 'Fiordland',
  googleMapsUrl:
    'https://www.google.com/maps/place/Milford+Track,+Southland+9679,+New+Zealand/@-46.2069596,165.794316,7.05z/data=!4m5!3m4!1s0xa9d5d0afc22a42cf:0xd9e500adcceb36e!8m2!3d-44.8138241!4d167.7860361',
  distance: 53.5,
  duration: '4 days',
  type: 'one way',
  difficulty: 'Easy - Intermediate',
  description:
    'From late October to April, experience \'the finest walk in the world\' - along valleys carved by glaciers, through ancient rainforests and past cascading waterfalls. From May to late October, it can be cold and wet, with ice, snow and short daylight hours - only go if you have alpine, river crossing and navigation skills.',
  imageUrl: milf,
},
{
  title: 'Paparoa Track',
  location: 'West Coast',
  googleMapsUrl:
    'https://www.google.com/maps/search/paparoa+national+park/@-42.1051833,171.3899216,12z/data=!3m1!4b1',
  distance: 55,
  duration: '3 days',
  type: 'one way',
  difficulty: 'Intermediate',
  description:
    'Paparoa Track crosses the Paparoa Range. It takes you through alpine tops, limestone karst landscapes and thriving rainforests, and provides breath-taking views.',
  imageUrl: papa,
},
{
  title: 'Rakiura Track',
  location: 'Southland',
  googleMapsUrl:
  'https://www.google.com/maps/place/Rakiura+National+Park/@-46.9972767,165.5960005,7z/data=!4m10!1m2!2m1!1s+Rakiura+National+Park!3m6!1s0xa9cd6effffe7b229:0xd88d77b078c64dc9!8m2!3d-46.9972767!4d167.8372114!15sChVSYWtpdXJhIE5hdGlvbmFsIFBhcmtaFyIVcmFraXVyYSBuYXRpb25hbCBwYXJrkgENbmF0aW9uYWxfcGFya-ABAA!16zL20vMDF4NjRs',
  distance: 32,
  duration: '3 days',
  type: 'loop',
  difficulty: 'Intermediate',
  description:
    'Escape on an island adventure - relax and unwind in the peaceful surroundings with the bush, birds and beach at your side.',
  imageUrl: rak,
},
{
  title: 'Routeburn Track',
  location: 'Otago, Fiordland',
  googleMapsUrl:
    'https://www.google.com/maps/search/Mount+Aspiring+National+Park/@-44.8139493,168.164853,9z/data=!3m1!4b1',
  distance: 33,
  duration: '2-4 days',
  type: 'one way',
  difficulty: 'Intermediate',
  description:
    'From November to April, weave through meadows, reflective tarns and alpine gardens, and be rewarded with spectacular vistas over vast mountain ranges and valleys. From May to October, it can be cold and wet, with ice, snow and short daylight hours - only attempt if you have alpine, navigation and river crossing skills.',
  imageUrl: rb,
},
{
  title: 'Whanganui Journey',
  location: 'Manawatu/Whanganui',
  googleMapsUrl:
    'https://www.google.com/maps/place/Whanganui+National+Park/@-39.2722636,174.9105534,15z/data=!3m1!4b1!4m5!3m4!1s0x6d6ad17b1e233b81:0xf00ef62249db500!8m2!3d-39.2722805!4d174.9193082',
  distance: 145,
  duration: '5 days kayaking and canoeing',
  type: 'one way',
  difficulty: 'Canoe Journey',
  description:
    'Explore the scenic Whanganui River by paddling down it through a landscape of remote hills and bush clad valleys. This trip is suitable for people with good fitness and confidence with a canoe.',
  imageUrl: whang,
},
];

export default data;
