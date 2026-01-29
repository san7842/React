import React ,{ useRef, useState } from 'react';

const movies = [
  { id: 1, image: '/img3.jpg' },
  { id: 2,  image: '/img4.jpg' },
  { id: 3,  image: '/img2.png' },
  { id: 4,  image: '/img5.jpg' },
  { id: 5,  image: '/movies/5.jpg' },
  { id: 6,  image: '/movies/6.jpg' },
  { id: 7,  image: '/movies/7.jpg' },
  { id: 8,  image: '/movies/8.jpg' },
  { id: 9,  image: '/movies/9.jpg' },
];

export default function MovieSlider() {
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      sliderRef.current.scrollLeft += 240;
    }

    if (distance < -minSwipeDistance) {
      sliderRef.current.scrollLeft -= 240;
    }
  };

  return (
    <div className="w-full">
      <div
        ref={sliderRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="
          flex gap-4 px-4
          overflow-x-auto
          scroll-smooth
          scrollbar-hide
          touch-pan-y
        "
      >
        {movies.map((movie) => (
          // <div
          //   key={movie.id}
          //   className="
          //     min-w-[300px] bg-gray-800 rounded-lg overflow-hidden shrink-0">
          //   <img
          //     src={movie.image}
          //     alt={movie.title}
          //     className="w-full h-[500px] object-cover"
          //   />
          //   <p className="p-3 text-white font-semibold text-center">
          //     {movie.title}
          //   </p> 
          // </div>

          <div
  key={movie.id}
  className="
    min-w-[300px]
    rounded-lg
    overflow-hidden
    shrink-0
    relative
    group
  "
>
  <img
    src={movie.image}
    alt=""
    className="
      w-full h-[500px] object-cover
      transition-transform duration-300
      group-hover:scale-110
    "
  />

  <div
    className="
      absolute inset-0
      bg-black/60
      flex items-center justify-center
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100
    "
  >
    <span className="text-white text-xl font-semibold">
      View Movie
    </span>
  </div>
</div>

        ))}
      </div>




    </div>
  );
}
