import { Tournament } from './types';

interface FiltersProps {
  sortFilter: string;
  seasonFilter: string;
  tournaments: Tournament[];
  selectedTournamentIndex: number;
  onSortChange: (value: string) => void;
  onSeasonChange: (value: string) => void;
  onTournamentChange: (index: number) => void;
}

function Filters({
  sortFilter,
  seasonFilter,
  tournaments,
  selectedTournamentIndex,
  onSortChange,
  onSeasonChange,
  onTournamentChange,
}: FiltersProps) {
  return (
    <div className="filters">
      {/* <span className="filter-label">Filter:</span> */}
      <select
        className="filter-select"
        id="tournamentFilter"
        value={selectedTournamentIndex}
        onChange={(event) => onTournamentChange(parseInt(event.target.value, 10))}
      >
        <option value="-1">All seasons</option>
        {tournaments.map((tournament, index) => (
          <option key={index} value={index}>
            Tournament - {tournament.date} - {tournament.winningTeam}
          </option>
        ))}
      </select>
      <select
        className="filter-select"
        id="sortFilter"
        value={sortFilter}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="">Sort By</option>
        <option value="wins">Most Wins</option>
        <option value="goals">Most Goals</option>
        <option value="winpct">Win %</option>
        <option value="gd">Goal Difference</option>
      </select>
    </div>
  );
}

export default Filters;
