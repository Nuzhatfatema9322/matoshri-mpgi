import { useEffect, useState } from "react";

function Hero({ institute }) {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fetchSliderImages = async () => {
      const res = await fetch(
        `http://localhost:5000/api/gallery?category=slider&institute=${institute}`
      );
      const data = await res.json();
      setImages(data);
    };

    fetchSliderImages();
  }, [institute]);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <section className="hero">
      <img
        src={images[index].image}
        className={`hero-image ${fade ? "fade-in" : "fade-out"}`}
        alt={images[index].title}
      />

      <button
        className="nav left"
        onClick={() =>
          setIndex(index === 0 ? images.length - 1 : index - 1)
        }
      >
        ❮
      </button>

      <button
        className="nav right"
        onClick={() =>
          setIndex(index === images.length - 1 ? 0 : index + 1)
        }
      >
        ❯
      </button>
    </section>
  );
}

export default Hero;
