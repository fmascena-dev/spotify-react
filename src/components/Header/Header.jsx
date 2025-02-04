import './HeaderStyle.scss';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

export default function Header() {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Seta direita" />
        </button>
      </div>
      <div className="header__search">
        <div className="header__img-input">
          <img src={search} alt="Buscar" />
          <input
            id="search-input"
            maxLength="800"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="O que você quer ouvir?"
          />
        </div>
        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </div>
    </nav>
  );
}
