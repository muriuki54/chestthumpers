import { Player } from './types';
import { gd, rankClass, rankLabel, winPct } from './leaderboardUtils';

interface LeaderboardTableProps {
  players: Array<Player & Required<Pick<Player, 'w' | 'd' | 'l' | 'gf' | 'ga'>>>;
}

function LeaderboardTable({ players }: LeaderboardTableProps) {  
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
              <th>Win %</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {players.map((player, index) => {
              const rank = index + 1;
              const pct = winPct(player);
              const diff = gd(player);
              const diffStr = diff > 0 ? `+${diff}` : diff;
              const diffClass = diff > 0 ? 'stat-good' : diff < 0 ? 'stat-bad' : '';
              const pctClass = pct >= 60 ? 'stat-good' : pct >= 40 ? 'stat-mid' : 'stat-bad';

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
                  <td>
                    <div className="win-bar-wrap">
                      <div className="win-bar">
                        <div className="win-bar-fill" style={{ width: `${pct}%` }} />
                      </div>
                      <span className={pctClass}>{pct}%</span>
                    </div>
                  </td>
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
