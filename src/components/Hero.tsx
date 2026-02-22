import first from '../assets/king.png';
import third from '../assets/player.png';
import second from '../assets/thinker.png';

import firstindex from '../assets/1.png';
import secondindex from '../assets/2.png';
import thirdindex from '../assets/3.png';

import outer from '../assets/outer.png';
import { Player } from './types';
import { winPct } from './leaderboardUtils';
import { useState, useEffect } from 'react';

type EnrichedPlayer = Player & Required<Pick<Player, 'w' | 'd' | 'l' | 'gf' | 'ga'>>;

interface HeroProps {
  topPlayers: EnrichedPlayer[];
}

function getPodiumImage(index: number):string {
  switch(index) {
    case 0:
      return first;
    case 1:
      return second;
    case 2:
      return third;
    default: 
      return outer;
  }
}
function getPodiumClass(index: number): string {
  switch (index) {
    case 0:
      return 'first';
    case 1:
      return 'second';
    case 2:
      return 'third';
    default:
      return '';
  }
}

function getPodiumIndex(index: number): string {
  switch(index) {
    case 0:
      return firstindex;
    case 1:
      return secondindex;
    case 2:
      return thirdindex;
    default: 
      return firstindex;
  }
}

function Hero({ topPlayers }: HeroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayOrder = isMobile ? [0, 1, 2] : [2, 0, 1];
  
  return (
    <section className="hero">
      <div className="hero-logo">
        <div className="logo-icon">⚽</div>
        <h1>Chest Thumpers</h1>
      </div>

      <div className="podium">
        {topPlayers.length > 0 &&
          displayOrder.map((playerIndex) => {
            const player = topPlayers[playerIndex];
            if (!player) return null;

            const podiumImage = getPodiumImage(playerIndex);
            const podiumClass = getPodiumClass(playerIndex);
            const podiumIndex = getPodiumIndex(playerIndex);

            return (
              <div key={player.pid} className={`podium-card ${podiumClass}`}>
                <div className="podium-image podium-image-contained">
                  <img src={podiumImage} alt="outer hero image" />
                </div>
                <div className="podium-image podium-image-overflowing">
                  <img src={outer} alt="outer hero image" />
                </div>
                <div className="podium-divider"></div>
                <div className="player-details">
                  <div className="player-index"><img src={podiumIndex} alt="player index" /></div>
                  <div className="player-name">{player.name}</div>
                  <div className="player-tag">{player.tag}</div>
                  <div className="podium-stats">
                    <div className="pstat">
                      <div className="pstat-val">{player.w}</div>
                      <div className="pstat-label">Wins</div>
                    </div>
                    <div className="pstat">
                      <div className="pstat-val">{player.gf}</div>
                      <div className="pstat-label">Goals</div>
                    </div>
                    <div className="pstat">
                      <div className="pstat-val">{winPct(player)}%</div>
                      <div className="pstat-label">Win %</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Hero;
