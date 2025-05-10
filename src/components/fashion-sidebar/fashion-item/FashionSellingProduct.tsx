import { Fade } from "react-awesome-reveal";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import useSWR from "swr";
import fetcher from "../../fetcher-api/Fetcher";
import TrendingItem from "../../trending/trendingItem/TrendingItem";
import Spinner from "@/components/button/Spinner";

const FashionSellingProduct = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const settings = {
    dots: false,
    infinite: true,
    rows: 3,
    arrows: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { data, error } = useSWR("/api/fashionselling", fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  return (
    <>
      <Fade triggerOnce direction="up" delay={400}>
        <Col md={12}>
          <div className="section-title">
            <div className="section-detail">
              <h2 className="gi-title">
                Top <span>Selling</span>
              </h2>
            </div>
          </div>
        </Col>
        <Slider {...settings} className="gi-trending-slider">
          {getData().map((item: any, index: number) => (
            <TrendingItem key={index} data={item} />
          ))}
        </Slider>
      </Fade>
    </>
  );
};

export default FashionSellingProduct;
