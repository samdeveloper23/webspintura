import { Card } from "flowbite-react";

const Home = () => {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="../../../public/Screenshot_2025_0607_140454.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate modi
        quas placeat
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        consequatur voluptate ipsum ex velit eius hic, praesentium dignissimos
        a. Laudantium culpa dolorem maiores itaque porro officiis quidem
        voluptate quibusdam id.
      </p>
    </Card>
  );
};

export default Home;
