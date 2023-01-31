import { useWindowSize } from "react-use";
const Tagline = () => {
  const { width } = useWindowSize();

  if (width < 650) {
    return (
      <div className="font-bold moving-text text-center text-3xl mt-20 text-[var(--secondary-color)] font-[Montserrat]">
        #ideate_innovate_incubate_your_dreams.
      </div>
    );
  } else {
    return (
      <div className="font-bold text-center text-3xl mt-10 text-[var(--secondary-color)] font-[Montserrat]">
        #ideate_innovate_incubate_your_dreams.
      </div>
    );
  }
};

export default Tagline;
