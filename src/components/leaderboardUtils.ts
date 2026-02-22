import { Player } from './types';

type PlayerStats = Required<Pick<Player, 'w' | 'd' | 'l' | 'gf' | 'ga'>>;

export function winPct(player: PlayerStats): number {
  return Math.round((player.w / (player.w + player.d + player.l)) * 100);
}

export function gd(player: PlayerStats): number {
  return player.gf - player.ga;
}

export function rankClass(rank: number): string {
  if (rank === 1) return 'rank-1';
  if (rank === 2) return 'rank-2';
  if (rank === 3) return 'rank-3';
  return 'rank-other';
}

export function rankLabel(rank: number): string {
  if (rank === 1) return 'Elite';
  if (rank === 2) return 'Pro';
  if (rank === 3) return 'Star';
  if (rank <= 6) return 'Rookie';
  return 'Rookie';
}
