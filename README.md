# WDI30 Project 2: GamesPost

## Introduction

GamesPost was the app I created for project 2 during the Web Development Immersive course at General Assembly London, to create this app I used Node.js, MongoDB, JavaScript, EJS, SCSS and Bootstrap. This app will connect the competitive gaming community as there are a lot of players out there looking for people to play tournaments with and I know this as I use to be one of those players.

## The Idea

The idea with this app was to create something that would connect competitive gamers together as there are a lot of players out there that don't have a team and there are a lot of teams out there that are looking for one or two players to join them in online tournaments etc. This app allows solo players or teams to post a game or tournament onto the app which other players or teams can comment on and say whether they would like to play or not.

## App Link

https://gamespost.herokuapp.com/

Register and Login to view the "Find Tournaments" page.

Some of the colors have been changed due to heroku.

## Screenshots

Title: 

![Imgur](https://i.imgur.com/oDeAHmq.png)

Games/Tournament index: 

![Imgur](https://i.imgur.com/rBoq165.png)

Games/Tournament show:

![Imgur](https://i.imgur.com/86sfZPM.png)

Description/Comment field:

![Imgur](https://i.imgur.com/0XVPSAQ.png)

## What was a success?

A success for me in this project was getting my idea across and creating something that I thought could really have an impact on the competitive gaming community. Although I found it challenging I enjoyed exploring the EJS syntax as I enjoy to learn new things, I used the EJS syntax well on my Games/Tournament index page (see above) as I liked how I could easily format the page and show my data from my database.

Example code:

```
<div class="row ml-2">
<% games.forEach((game) => { %>
  <div class="col-4">
  <div class="card" style="width: 20rem;"e>
  <img class="card-img-top" src="<%= game.image %>" alt="Card image cap">
  <div class="card-body">
  <h4 class="card-title"></h4>
  <a href="/games/<%= game.id %>" class="btn btn-primary">See Game</a>
  </div>
  </div>
  </div>
  <% }) %>
</div>
```

## Challenges

Although I said I enjoyed learning the EJS syntax (WHICH I DID!!!) it was still very confusing at some points and as a junior developer I felt that the syntax was very confusing to read in atom as it was very hard to format the code therefor I would get lost as it just seemed to be cluttered by ice-cream tags ```  <%= ```. Also time management is something that challenges me and if I was to do the project again I would of saved more time to style my app.

## Conclusion 

This was a great project as it helped me learn a lot about myself and highlighted the personal skils I need to work on such as time managment and planning but I also need to work on my coding especially styling.

## Currently

This will forever be developed as I want to turn it into a full scale project for me and a few friends to work on.
