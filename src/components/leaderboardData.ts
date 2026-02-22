import { Player, Tournament } from './types';

export const players: Player[] = [
  {
    pid: 'cha01',
    name: 'Charlie One G',
    tag: 'cremeofthecrop',
    emoji: '🎮'
  },
  {
    pid: 'amo04',
    name: 'Moss Kenga',
    tag: 'mcoasti-topshotta',
    emoji: '🏝️'
  },
  {
    pid: 'arc05',
    name: 'Don Arcel',
    tag: 'teflondon',
    emoji: '🏅',
  },
  {
    pid: 'lee02',
    name: 'Lee Yobra',
    tag: 'nextseason-myseason',
    emoji: '⚡'
  },
  {
    pid: 'sam03',
    name: 'Flex Ndets',
    tag: 'OG-kambaman',
    emoji: '🏋🏽‍♀️'
  }
];

export const tournaments: Tournament[] = [
  {
    date: "10/10/2025",
    winner: "cha01",
    winningTeam: "Inter",
    topScorer: "Thuram",
    topAssists: "",
    players: [
      {
        pid: "cha01",
        w: 5,
        d: 0,
        l: 1,
        gf: 30,
        ga: 13,
        team: "Inter"
      },
      {
        pid: "lee02",
        w: 3,
        d: 1,
        l: 2,
        gf: 22,
        ga: 12,
        team: "Barcelona"
      },
      {
        pid: "sam03",
        w: 2,
        d: 1,
        l: 3,
        gf: 12,
        ga: 22,
        team: "Bayern Munich"
      },
      {
        pid: "amo04",
        w: 1,
        d: 0,
        l: 5,
        gf: 9,
        ga: 26,
        team: "Real Madrid"
      },
    ]
  },
  {
    date: "24/10/2025",
    winner: "cha01",
    winningTeam: "Liverpool",
    topScorer: "",
    topAssists: "",
    players: [
      {
        pid: "cha01",
        w: 4,
        d: 0,
        l: 2,
        gf: 19,
        ga: 10,
        team: "Liverpool"
      },
      {
        pid: "arc05",
        w: 4,
        d: 0,
        l: 2,
        gf: 20,
        ga: 16,
        team: "Bayern Munich"
      },
      {
        pid: "lee02",
        w: 3,
        d: 0,
        l: 3,
        gf: 14,
        ga: 15,
        team: "Manchester City"
      },
      {
        pid: "amo04",
        w: 1,
        d: 0,
        l: 5,
        gf: 10,
        ga: 22,
        team: "Real Madrid"
      },
    ]
  },
  {
    date: "25/10/2025",
    winner: "arc05",
    winningTeam: "Manchester City",
    topScorer: "Thuram",
    topAssists: "",
    players: [
      {
        pid: "cha01",
        w: 3,
        d: 2,
        l: 1,
        gf: 23,
        ga: 9,
        team: "Inter"
      },
      {
        pid: "arc05",
        w: 5,
        d: 1,
        l: 0,
        gf: 16,
        ga: 7,
        team: "Manchester City"
      },
      {
        pid: "lee02",
        w: 1,
        d: 2,
        l: 3,
        gf: 13,
        ga: 18,
        team: "Bayern Munich"
      },
      {
        pid: "amo04",
        w: 0,
        d: 1,
        l: 4,
        gf: 8,
        ga: 26,
        team: "Real Madrid"
      },
    ]
  },
  {
    date: "31/10/2025",
    winner: "arc05",
    winningTeam: "Manchester City",
    topScorer: "Haaland",
    topAssists: "",
    players: [
      {
        pid: "cha01",
        w: 4,
        d: 1,
        l: 3,
        gf: 30,
        ga: 22,
        team: "Inter"
      },
      {
        pid: "arc05",
        w: 7,
        d: 0,
        l: 1,
        gf: 31,
        ga: 16,
        team: "Manchester City"
      },
      {
        pid: "lee02",
        w: 4,
        d: 1,
        l: 3,
        gf: 26,
        ga: 24,
        team: "Barcelona"
      },
      {
        pid: "amo04",
        w: 0,
        d: 1,
        l: 7,
        gf: 9,
        ga: 33,
        team: "Real Madrid"
      },
      {
        pid: "sam03",
        w: 2,
        d: 3,
        l: 3,
        gf: 18,
        ga: 19,
        team: "Real Madrid"
      },
    ]
  },
  {
    date: "07/11/2025",
    winner: "cha01",
    winningTeam: "Argentina",
    topScorer: "Mbappe",
    topAssists: "Messi",
    players: [
      {
        pid: "cha01",
        w: 5,
        d: 1,
        l: 0,
        gf: 32,
        ga: 11,
        team: "Argentina"
      },
      {
        pid: "lee02",
        w: 4,
        d: 1,
        l: 1,
        gf: 24,
        ga: 15,
        team: "France"
      },
      {
        pid: "amo04",
        w: 1,
        d: 0,
        l: 5,
        gf: 6,
        ga: 27,
        team: "Real Madrid"
      },
      {
        pid: "sam03",
        w: 1,
        d: 0,
        l: 5,
        gf: 15,
        ga: 24,
        team: "Real Madrid"
      },
    ]
  },
  {
    date: "14/11/2025",
    winner: "cha01",
    winningTeam: "Bayern Munich",
    topScorer: "Haaland",
    topAssists: "Musiala",
    players: [
      {
        pid: "cha01",
        w: 3,
        d: 2,
        l: 1,
        gf: 22,
        ga: 12,
        team: "Bayern Munich"
      },
      {
        pid: "lee02",
        w: 3,
        d: 2,
        l: 1,
        gf: 22,
        ga: 17,
        team: "France"
      },
      {
        pid: "amo04",
        w: 1,
        d: 0,
        l: 5,
        gf: 6,
        ga: 23,
        team: "Real Madrid"
      },
      {
        pid: "arc05",
        w: 2,
        d: 2,
        l: 2,
        gf: 20,
        ga: 18,
        team: "Manchester City"
      },
    ]
  },
  {
    date: "28/11/2025",
    winner: "arc05",
    winningTeam: "Manchester City",
    topScorer: "Haaland",
    topAssists: "",
    players: [
      {
        pid: "cha01",
        w: 3,
        d: 1,
        l: 2,
        gf: 18,
        ga: 14,
        team: "Chelsea"
      },
      {
        pid: "lee02",
        w: 1,
        d: 0,
        l: 4,
        gf: 11,
        ga: 20,
        team: "France"
      },
      {
        pid: "amo04",
        w: 1,
        d: 0,
        l: 5,
        gf: 8,
        ga: 18,
        team: "Real Madrid"
      },
      {
        pid: "arc05",
        w: 6,
        d: 0,
        l: 0,
        gf: 27,
        ga: 12,
        team: "Manchester City"
      },
    ]
  },
  {
    date: "05/12/2025",
    winner: "cha01",
    winningTeam: "Paris SG",
    topScorer: "Mbappe",
    topAssists: "",
    players: [
      {
        pid: "cha01",
        w: 4,
        d: 1,
        l: 1,
        gf: 27,
        ga: 10,
        team: "Paris SG"
      },
      {
        pid: "lee02",
        w: 3,
        d: 0,
        l: 3,
        gf: 16,
        ga: 18,
        team: "Real Madrid"
      },
      {
        pid: "amo04",
        w: 0,
        d: 0,
        l: 6,
        gf: 5,
        ga: 22,
        team: "Arsenal"
      },
      {
        pid: "arc05",
        w: 4,
        d: 1,
        l: 1,
        gf: 16,
        ga: 14,
        team: "Manchester City"
      },
    ]
  },
  {
    date: "05/12/2025",
    winner: "arc05",
    winningTeam: "Manchester City",
    topScorer: "Haaland",
    topAssists: "",
    players: [
      {
        pid: "cha01",
        w: 3,
        d: 1,
        l: 2,
        gf: 18,
        ga: 17,
        team: "Paris SG"
      },
      {
        pid: "lee02",
        w: 2,
        d: 1,
        l: 3,
        gf: 21,
        ga: 20,
        team: "Bayern Munich"
      },
      {
        pid: "amo04",
        w: 0,
        d: 1,
        l: 5,
        gf: 6,
        ga: 25,
        team: "Real Madrid"
      },
      {
        pid: "arc05",
        w: 5,
        d: 1,
        l: 0,
        gf: 26,
        ga: 9,
        team: "Manchester City"
      },
    ]
  },
  {
    date: "23/01/2026",
    winner: "arc05",
    winningTeam: "Manchester City",
    topScorer: "Griezmann",
    topAssists: "",
    players: [
      {
        pid: "cha01",
        w: 1,
        d: 2,
        l: 0,
        gf: 18,
        ga: 7,
        team: "Bayern Munich"
      },
      {
        pid: "lee02",
        w: 1,
        d: 1,
        l: 1,
        gf: 10,
        ga: 6,
        team: "France"
      },
      {
        pid: "amo04",
        w: 0,
        d: 1,
        l: 3,
        gf: 2,
        ga: 11,
        team: "Real Madrid"
      },
      {
        pid: "arc05",
        w: 2,
        d: 1,
        l: 0,
        gf: 8,
        ga: 4,
        team: "Manchester City"
      },
    ]
  },
  {
    date: "23/01/2026",
    winner: "arc05",
    winningTeam: "Bayern Munich",
    topScorer: "Haaland",
    topAssists: "",
    players: [
      {
        pid: "cha01",
        w: 4,
        d: 1,
        l: 1,
        gf: 16,
        ga: 8,
        team: "Bayern Munich"
      },
      {
        pid: "lee02",
        w: 3,
        d: 1,
        l: 2,
        gf: 13,
        ga: 9,
        team: "France"
      },
      {
        pid: "amo04",
        w: 0,
        d: 0,
        l: 6,
        gf: 2,
        ga: 28,
        team: "Real Madrid"
      },
      {
        pid: "arc05",
        w: 4,
        d: 0,
        l: 2,
        gf: 22,
        ga: 8,
        team: "Manchester City"
      },
    ]
  },
];