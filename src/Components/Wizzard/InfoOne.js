import React from "react";

import WizzardOne from "../../Images/WizzardOne.png";

const InfoOne = () => {
  return (
    <div>
      <div>
        <img src={WizzardOne} alt="garden" />
      </div>
      <h3>
        Minska dina <br /> klimatavtryck
      </h3>
      <p>
        Välj bort bilen och gör både dig själv och naturen en tjänst. <br /> Med
        positiva hälsoeffekter och färre klimatavtryck så gör du både dig själv
        och planeten en tjänst. <br />
        Du kommer också kunna skänka pengar till en vald organisation utan att
        öppna plånboken.
      </p>
    </div>
  );
};

export default InfoOne;
