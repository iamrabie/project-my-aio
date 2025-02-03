const BackgroundSection = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center z-[-1]"
      style={{
        backgroundImage: `url('https://myaio.com/wp-content/themes/dexai/assets/img/images/main_shape.png')`,
        opacity: 0.6,
      }}
    ></div>
  );
};

export default BackgroundSection;
