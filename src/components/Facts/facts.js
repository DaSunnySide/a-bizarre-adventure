import fetch from 'isomorphic-fetch';

export default function getFacts() {
  return fetch('https://sunnysidephotogallery.com/')
  .then(res => res.json());

}
