export interface Player {
  pid: string,
  name: string;
  tag: string;
  emoji: string;
  w?: number,
  d?: number,
  l?: number,
  gf?: number,
  ga?: number,
  team?: string
}

export interface Tournament {
  date: string,
  winner: string,
  winningTeam: string,
  topScorer: string,
  topAssists: string,
  players: Array<Required<Pick<Player, 'pid' | 'w' | 'd' | 'l' | 'gf' | 'ga' | 'team'>>>
}