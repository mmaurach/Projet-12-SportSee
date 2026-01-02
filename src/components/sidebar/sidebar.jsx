import "./sidebar.scss";
import Button from "../Button/Button";
import yoga from "../../assets/yoga.png";
import musculation from "../../assets/musculation.png";
import natation from "../../assets/natation.png";
import velo from "../../assets/velo.png";

function Sidebar() {
  return (
    <section className="sidebar-wrapper">
      <div className="sidebar-btn">
        <Button imageBtn={yoga} />
        <Button imageBtn={natation} />
        <Button imageBtn={velo} />
        <Button imageBtn={musculation} />
      </div>
      <div className="sidebar-copyright">Copyright, SportSee 2020</div>
    </section>
  );
}

export default Sidebar;
