import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div className="pageContent">
    <div className="heading">
      <h1>Home Page</h1>
    </div>
    <div className="pageBody">
      <p>If you're reading this, let me warn you that chances are you're wasting your time. Chances are, you'll get to the bottom of this page, realize that every calorie you oh-so-foolishly expended in the arduous act of scrolling the wheel on your mouse was a waste, and then proceed to overcompensate this caloric deficit by gorging your way through the entire contents of your freezer, which may very well lead you into an unfortunate place in your life, where you are overwhelmed by gluttony and obesity. Chances are you'll be filled with regret, for every second you spend here, when you could be cutting into a nice block of Romano cheese to sample with a well-aged Zinfandel wine from the fridge. Chances are that years from now, when you reflect on the foolish mistakes of your youth and how you squandered the golden years, the moments you spend on this page will be the greatest of those regrets. </p>

      <p>But you’re still here. And reading. </p>

      <p>I’m sorry, that you have nothing better to do with your time than read through this. I really am. Just thinking of all the millions of things I would rather be doing, the places I would rather be, than stuck here at this dump of a desk with my nose pressed against the smeared screen of my trashy laptop, in a room that wreaks of rotten tomatoes and stinky feet, regretting every word that I type, I pity anyone who feels compelled to continue reading this. I, the writer of this pointless page, am warning you that there will be absolutely nothing worth doing on here. You will get no purpose out of finishing this. No joy, no smile, no hearty chuckles. Nothing.
      </p>
      <p>I’m actually curious though, about one thing. What do you think you’re gonna find there, at the bottom of the page? Once you get to the bottom of this stream of utter nonsense, what do you really think will be waiting for you? And what could you even possibly find that would make all the time you wasted on this page worth it? Some sort of secret recipe? News that I’ve hidden Easter eggs all over the site, and if you look hard enough, you might find something entirely amusing? Or maybe a trophy? </p>
      <p>
      I really can’t imagine. Maybe at this point, you’re just reading because you feel invested in this. You’ve wasted the time it took to drag your eyes over every painful line of the first few paragraphs, and, just like that one friend from high school who got dragged into MLM’s, by the point you realized how wrong you were, you were far too deep in the unfortunate adventure to back out. </p>
      <p>
        Or maybe you just enjoy wasting your time. Maybe you like the idea that this inane writing will keep your mind off of whatever real problems you should be attending to. Because it will do that. Why worry about paying the rent, when you could be enlightening yourself with the intelligent banter on this page. Who needs bread on the table, when this Home page gives you all the food for thought you could ever need.
        </p>
        <p>I feel horrible that you’ve gotten to this point. You see, I’m implicit in whatever time you do wind up wasting here. I’m encouraging your appalling habit of expending life's most precious currency browsing through mundane content on the internet. How many hours have you wasted this week just browsing through social media, with absolutely nothing to show for it? And now here I am making it worse, just feeding your addiction. Just look at you go. You’re pathetic! Like google ads on your web browser, you're scrounging around on this page just desperate for any sort of reason to be here.
        </p>
        <p>Well, I’m flabbergasted. After all that, you still made it to the bottom of the page. I wish I could say that I have something here for you. That you are a glorious victor, that you've made it through a gauntlet of tests to drive you away, and that there was some purpose to all of this. But you really aren’t in any way accomplished for getting this far. There’s nothing here. And most certainly nothing after here. So good job. You should almost be proud of how much time you’ve wasted. And even knowing that it’s done, with nothing to gain, you keep reading. </p>
        <p>What a completionist.</p>
        <p>Alright, you win. Congratulations!</p>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
