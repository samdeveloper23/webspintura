import { Card } from "flowbite-react";

const Home = () => {
  return (
    <>
      <div className="centro">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../../../../public/MiLogo.png"
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

        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/../../public/MiLogo.png"
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
