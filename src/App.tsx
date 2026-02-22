import { useMemo, useState } from 'react';
import './App.css';
import Filters from './components/Filters';
import Hero from './components/Hero';
import LeaderboardTable from './components/LeaderboardTable';
import { tournaments, players } from './components/leaderboardData';
import { Player, Tournament } from './components/types';

function App() {
  const [sortFilter, setSortFilter] = useState<string>('winpct');
  const [seasonFilter, setSeasonFilter] = useState<string>('');
  const [selectedTournamentIndex, setSelectedTournamentIndex] = useState<number>(-1);

  type TournamentPlayer = Tournament['players'][number];
  type EnrichedPlayer = Player & Required<Pick<Player, 'w' | 'd' | 'l' | 'gf' | 'ga' | 'team'>>;
  
  // Enrich tournament players with player data (name, tag, emoji, etc.)
  const tournamentPlayers = useMemo<EnrichedPlayer[]>(() => {
    let allPlayers: TournamentPlayer[];

    if (selectedTournamentIndex === -1) {
      // Combine stats from all tournaments
      const playerStatsMap = new Map<string, TournamentPlayer>();
      
      tournaments.forEach(tournament => {
        tournament.players.forEach(tournamentPlayer => {
          const existing = playerStatsMap.get(tournamentPlayer.pid);
          if (existing) {
            // Aggregate stats
            existing.w += tournamentPlayer.w;
            existing.d += tournamentPlayer.d;
            existing.l += tournamentPlayer.l;
            existing.gf += tournamentPlayer.gf;
            existing.ga += tournamentPlayer.ga;
          } else {
            // Create new entry with copied values
            playerStatsMap.set(tournamentPlayer.pid, { ...tournamentPlayer });
          }
        });
      });
      
      allPlayers = Array.from(playerStatsMap.values());
    } else {
      allPlayers = tournaments[selectedTournamentIndex].players;
    }

    let enriched = allPlayers.map((tournamentPlayer: TournamentPlayer) => {
      const playerData = players.find((p) => p.pid.toLowerCase() === tournamentPlayer.pid.toLowerCase());
      
      return {
        ...playerData,
        ...tournamentPlayer,
        name: playerData?.name ?? tournamentPlayer.pid,
        tag: playerData?.tag ?? '',
        emoji: playerData?.emoji ?? '⚽',
      };
    });

    // Apply sorting based on sortFilter
    if (sortFilter) {
      enriched.sort((a, b) => {
        let primary = 0;
        switch (sortFilter) {
          case 'wins':
            primary = b.w - a.w;
            break;
          case 'goals':
            primary = b.gf - a.gf;
            break;
          case 'winpct': {
            const aWinPct = (a.w / (a.w + a.d + a.l)) * 100;
            const bWinPct = (b.w / (b.w + b.d + b.l)) * 100;
            primary = bWinPct - aWinPct;
            break;
          }
          case 'gd':
            primary = (b.gf - b.ga) - (a.gf - a.ga);
            break;
          default:
            const aWinPct = (a.w / (a.w + a.d + a.l)) * 100;
            const bWinPct = (b.w / (b.w + b.d + b.l)) * 100;
            primary = bWinPct - aWinPct;
        }
        
        // If primary sort is equal, sort by goal difference
        if (primary === 0) {
          return (b.gf - b.ga) - (a.gf - a.ga);
        }
        return primary;
      });
    }

    return enriched;
  }, [selectedTournamentIndex, sortFilter]);

  return (
    <div>
      <Hero 
        topPlayers={tournamentPlayers.slice(0, 3)}
      />
      <Filters
        sortFilter={sortFilter}
        seasonFilter={seasonFilter}
        tournaments={tournaments}
        selectedTournamentIndex={selectedTournamentIndex}
        onSortChange={setSortFilter}
        onSeasonChange={setSeasonFilter}
        onTournamentChange={setSelectedTournamentIndex}
      />
      <LeaderboardTable players={tournamentPlayers} />
    </div>
  );
}

export default App;
