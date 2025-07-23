import { Card } from "flowbite-react";
import logo from "../../../../public/MiLogo.png";
import imagenPrimera from "../../../../public/antes-despues-pintura.png";

const Home = () => {
  return (
    <>
      <div className="centro">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={imagenPrimera}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pintado de habitaciones desde 250€
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Tratamiento de la pared "antimanchas, mohoo, salitres, etc" y
            pintado, presupuesto sin compromiso.
          </p>
        </Card>

        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={logo}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            modi quas placeat
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            consequatur voluptate ipsum ex velit eius hic, praesentium
            dignissimos a. Laudantium culpa dolorem maiores itaque porro
            officiis quidem voluptate quibusdam id.
          </p>
        </Card>
      </div>
    </>
  );
};

export default Home;
