import {Button} from "../components/Button";
import "./Recommended.css";
import "../Style/Button.css"

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="marcas">Buscar por marcas</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="Todas" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Otras" title="Otras"/>
        </div>
      </div>
    </>
  );
};

export default Recommended;
