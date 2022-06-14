import { group, check, sleep } from 'k6';
import getUsers from '/scripts/getUsers.js';
import getMusics from '/scripts/getMusics.js';
import getMusicsByPlaylist from '/scripts/getMusicsByPlaylist.js';
import getPlaylistByMusic from '/scripts/getPlaylistByMusic.js';
import getPlaylistByUser from '/scripts/getPlaylistByUser.js';


export default function () {
 
 group('Get All Users', () => {
  getUsers()
 });

 group('Get All Musics', () => {
  getMusics()
 });

 group('Get All Musics by playlist', () => {
  getMusicsByPlaylist()
 });

 group('Get Playlist by Music', () => {
  getPlaylistByMusic()
 });

 group('Get Playlist By User', () => {
  getPlaylistByUser()
 });

 sleep(1);
}