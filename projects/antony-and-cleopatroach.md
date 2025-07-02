---
layout: base.html

title: ANTony and CleopatROACH
subtitle: A small RTS game written in Golang based on Shakespears
description: "<b>ANTony and CleopatROACH</b> is a small RTS game based on Shakespeare, developed in Golang for a 2 week game jam"
tags: project
image: img/antony-and-cleopatroach/icon.png
repo: https://github.com/fahseltc/ANTony-and-CleopatROACH
date: 2025-06-29
has_article: true
---

![image](/img/antony-and-cleopatroach/in-game.png)

[You can play it here!](https://digdugdiggy.itch.io/antony-and-cleopatroach)

# Project Overview

The game is a Realtime Strategy game (similar to Starcraft) where you direct Ants and Roaches to collect Sugar and Wood to build more units and creates bridges. The games story is loosely based upon Shakespeare's Antony and Cleopatra, and the game has many bug/Shakespeare puns.
It was developed for the [Ebitengine 2025 Game Jam](https://itch.io/jam/ebitengine-game-jam-2025) over two weeks from June 15th to June 29th. The theme for the game jame was "Union", so I wanted to go with a type of love story.
Most of the art and writing was done with ChatGPT.

You can see more screenshots of the game in-development here: https://github.com/fahseltc/ANTony-and-CleopatROACH/tree/master/dev-screenshots

## Goals

- Become more familiar with the [golang](https://go.dev/) programming language.
- Learn about [Ebitengine](https://ebitengine.org/), one of the premier game engines for golang.
- Develop a complete game in a two week timespan.
- Collaborate with friends.

# What Went Well

### Initial Brainstorming

Once the jam theme was announced, I did some brainstorming and came up with a few different ideas. Here is a selection of the initial ideas I had:

- Union Station - some kind of train/logistics game? (Someone else in the jam ended up having this same idea!)
- RPG game about bonds between people where you gather multiple characters, story heavy.
- Wedding Planning where you have couples with different preferences and you need to match them with venues/styles to make them happy.
- 2 Player dungeon crawler roguelike where the two characters are connected somehow.
- Insect RTS but its Romeo and Juliet and you are trying to get the bugs married.

In the end, the last idea worked out. The first day brainstorming was something that went really well, and I collaborated with a friend on what idea to choose. I had good direction and some basic planning on the first day, so I listed out all the features and things I might need for the basic RTS game and ways to explain the story to the player via textboxes and dialogue.

### ChatGPT for writing and art

Using ChatGPT was another thing that went really well! I am not great at digital art, so it was able to make the majority of the art for me and simplifying my development process. Luckily, it has (probably) trained on all of Shakespeare's works and so it was very capable at coming up with puns and funny dialogue for my game to use. Here is an example of some of the writing it came up with:

```
The Senate-mound murmurs with unrest
Some say Ant-tony hath bent his thorax too far,
Given up tunnels and treaties for the shimmer of a roach's wing.
```

```
A sting! A sting! My kingdom for a sting!
```

```
O brave Foragerius! He hath fallen 'neath a human’s sandal...
```

ChatGPT also created the excellent title screen

![Two Bugs kissing titlescreen](/img/antony-and-cleopatroach/icon.png)

### TMX Tilemaps

[Tiled](https://www.mapeditor.org/) is a tilemap editing program that lets you import a tileset and build larger maps out of small tiles. It produces a file format called [TMX](https://doc.mapeditor.org/en/stable/reference/tmx-map-format/)
and then using [go-tiled](https://github.com/lafriks/go-tiled) I was able to pretty cleanly edit and load in complex map data to my game.
![Screenshot of Tiled Editor](/img/antony-and-cleopatroach/tiled.png)
This is a program I had some familiarity with and it was instrumental in completing the game on time. You can add 'Object Layers' on top of the graphics and use those to drive game events, for example collision and detecting when the level is complete by checking if two units are within a rectangle.

### Workflow

My workflow was quite loose for this gamejam. Initially I had someone else to code with and did a lot of planning out high level stories, but my teammate promptly had to back out, so I went back to something minimal.
My daily planning mostly was a checklist of tasks which I would start working on the top of. More items would be added throughout the day, and at the end of a work day I would re-prioritize the list so I could just start at the top again on the next day. Here is an example of my list early on in development.
![list of bullet points](/img/antony-and-cleopatroach/planning.png)
This actually went pretty well for a solo dev, and its a method I've used in the past successfully. If either I had more people to work with, or I planned to work on this game for a longer period of time, this system would not scale well. But for the short game jam, it went great!

# What Didn't Go Well

### Scope & Collaboration

Things went wrong early on when my team mate decided he didn't have time to commit to the project on day 3/14. I had scoped the features for two developers, but quickly found myself alone with too much work. I decided to continue working on the core of the game and would decided to cut features later.
Later in the project, ended up having to cut combat from the scope which is something that is pretty important in an RTS game. Unfortunately there just wasn't time and the overall game suffered for it.

I also originally wanted to have 5 levels, mimicking the 5-act stucture of Shakespeare's play, but again that had to be cut - along with the main protaganist from the play. I ended up with 2 levels of gameplay as well as a "thank you for playing" type ending level. I'm still proud of what I accomplished in this jam though.

### Submission Bug

One other thing that went very wrong was a bug submitted in the final version of my game. It turned out that I deleted an asset and so when level 2 was loading, the game would crash. Luckily, I was able to find it 2-3 days after the jam ended, and I was able to make the small tweak to re-enable the level. I had some worries if this was against the spirit of the game jam, but decided to make the fix because all of the content was created during the alotted timespan and all I was doing was stopping the crash.

# Key Challenges

### Unit movement, collision and pathfinding

Pathfinding is hard! I made my game maps very simple to avoid any kind of requirement for complex long-distance pathfinding, but even local pathfinding is hard. My game as submitted has a lot of issue with units getting stuck on one another and not being able to move around. I spent a lot of time with the unit movement code, and its still not in a great place. I discovered that units can slide by each other when moving past diagonally, so I tried to design the levels with that in mind.
![ants moving smoothly diagonal](/img/antony-and-cleopatroach/smooth-diagonal-movement.gif)

And here is an example of my movement system failing

![ants moving vertical and getting stuck](/img/antony-and-cleopatroach/bad-vertical-movement.gif)

The jittering you see is the result of another little bit of code I wrote to try and get units "unstuck", but it fails in this case.
Overall, pathfinding and getting units to move around one another was one of the biggest problems I faced, and I intend to spend some more time improving that.

I had some ideas to make things better like making gathering units not collide with one another, or making unit-vs-unit hitboxes round instead of rectangular.

# What to do differently next time

Next time I would try to find a more involved team. I've made two decent games so far with a little bit of collaboration on each, but I'd really like to get a bigger team of 3-5 people and have some help in the coding department. Maybe 2 people on coding and 2 people on art would be ideal.

This was a very small game jam with only 14 participants, so I will probably have to find a more popular jam to find a bigger team.

# Highlights / player reactions

As of writing (7/2/2025) the game jam voting is not yet complete, but I do have some pretty positive feedback from friends and fellow developers.
![positive feedback](/img/antony-and-cleopatroach/feedback1.PNG)
![positive feedback](/img/antony-and-cleopatroach/feedback2.PNG)
![positive feedback](/img/antony-and-cleopatroach/feedback3.PNG)
![positive feedback](/img/antony-and-cleopatroach/feedback4.PNG)

# Closing Thoughts

Overall I feel like I had a successful game jam. Loosing my team early on was a big hit to my motivation, but I persevered and kept my head working. I didn't mention it above, but I was out of town for about 5 days of the jam and had family in town for another 2 - so during those days I was lucky to get a few hours of work into the game from my laptop.

I think I managed my time well and kept the scope of the game low enough to deliver something with fun gameplay and interesting story. I am finding that both of my games have a decent story element - and that is something I enjoy and want to find ways to better work into my gameplay. I'm proud of what I made here.
