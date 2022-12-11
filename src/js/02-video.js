import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');

const player = new Player('iframeEl');

player.on('play', onPlay);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  // data is an object containing properties specific to that event
  console.log('played the video!');
};
