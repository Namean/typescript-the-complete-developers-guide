# TypeScript: The Complete Developer's Guide

## Section 11: Reusable Code

### Lesson 102. Project Overview

Spread sheet of football matches

```ts
footballMatches = {
  date: Date,
  homeTeam: string,
  awayTeam: string,
  goals: {
    homeGoals: number,
    awayGoals: number,
  },
  winner: string, // H || A || D, (home, away, draw)
  referee: string,
};
```

<!-- ETL (Extract, Transform, Load) -->

Take all the data in CSV format

- load: then load up all the data in Nodejs application, parse into
<!-- Code we write -->
- parse:
- analyze:
- report:
  - Maybe find the average number of goals per game.
  - which team won the most or which team lost the most.
  - output to terminal or HTML
