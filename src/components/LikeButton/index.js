import React, { Component } from 'react';

export default function LikeButton({ likeIt, status, chapterId }) {
  return (
    <button disabled={status} onClick={likeIt}>This will make a fine addition to my...COLLECTION!</button>
  );
}
