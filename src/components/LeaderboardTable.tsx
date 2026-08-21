import { Player } from './types';
import { tournaments } from './leaderboardData';
import { gd, rankClass, rankLabel, tournamentsWon } from './leaderboardUtils';

interface LeaderboardTableProps {
  players: Array<Player & Required<Pick<Player, 'w' | 'd' | 'l' | 'gf' | 'ga'>>>;
  showTitles: boolean;
}

function LeaderboardTable({ players, showTitles }: LeaderboardTableProps) {
  return (
    <div className="table-section">
      <div className="table-title">All Players - Season Stats</div>
      <div className="table-wrap">
        <table id="leaderTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>P</th>
              <th className="sort-active">
                W <span className="sort-arrow">↓</span>
              </th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              {showTitles && <th>Titles</th>}
              <th>Rank</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {players.map((player, index) => {
              const rank = index + 1;
              const wins = tournamentsWon(player.pid, tournaments);
              const diff = gd(player);
              const diffStr = diff > 0 ? `+${diff}` : diff;
              const diffClass = diff > 0 ? 'stat-good' : diff < 0 ? 'stat-bad' : '';

              return (
                <tr key={player.pid}>
                  <td>{rank}</td>
                  <td>
                    <div className="player-cell">
                      <div className="mini-avatar">{player.emoji}</div>
                      <div className="player-info-cell">
                        <strong>{player.name}</strong>
                        <span>{player.tag}</span>
                      </div>
                    </div>
                  </td>
                  <td>{player.w + player.d + player.l}</td>
                  <td>
                    <strong>{player.w}</strong>
                  </td>
                  <td>{player.d}</td>
                  <td>{player.l}</td>
                  <td>{player.gf}</td>
                  <td className="stat-bad">{player.ga}</td>
                  <td className={diffClass}>{diffStr}</td>
                  {showTitles && <td>{wins}</td>}
                  <td>
                    <span className={`rank-pill ${rankClass(rank)}`}>{rankLabel(rank)}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardTable;
