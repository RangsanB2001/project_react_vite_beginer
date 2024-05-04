import Carousel from "react-bootstrap/Carousel";
import BannerLists from "../data/Banner.json";

export function Banner() {
  return (
    <Carousel
      className="navbar bg-danger navbar-expand bg-body-danger text-warning"
      data-bs-theme="dark"
    >
      {BannerLists.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100"
            src={banner.imgUrl}
            alt={banner.bannerName}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
