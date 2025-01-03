import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import { NavLink } from "react-router-dom";

const Head = () => {
  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white shadow-sm">
      <div className=" container p-2">
        <div>
          <Slider {...settings}>
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="p-2">
                  <div className="text-center p-1 cursor-pointer text-lg">
                    <NavLink
                      to={`/${i + 1}`}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-info text-white px-2 py-1 rounded"
                          : "text-dark"
                      }
                    >
                      Slider {i + 1}
                    </NavLink>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Head;
