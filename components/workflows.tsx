"use client";

import { useState } from "react";
import Image from "next/image";
import Spotlight from "@/components/spotlight";

interface MovieData {
  title: string;
  image: string;
  genre: string;
  description: string;
  trailerUrl: string;
}

// Helper function to convert YouTube URLs to embed format
const getEmbedUrl = (url: string) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : '';
};

const movieData: MovieData[] = [
  {
    title: "The Chosen",
    image: "/images/chosen.png",
    genre: "Drama",
    description: "The Chosen is a historical drama based on the life of Jesus and those who knew him. Set against the backdrop of Roman oppression in first-century Israel, the series shares an authentic look at Jesus' revolutionary life and teachings.",
    trailerUrl: "https://www.youtube.com/watch?v=K1-FoFj8Jbo",
  },
  {
    title: "Drop",
    image: "/images/drop2025.jpg",
    genre: "Thriller",
    description: "Violet, a widowed mother on her first date in years, arrives at an upscale restaurant where she is relieved that her date, Henry, is more charming and handsome than she expected. But their chemistry begins to curdle as Violet begins being irritated and then terrorized by a series of anonymous drops to her phone.",
    trailerUrl: "https://youtu.be/bs_nFwh5eJw",
  },
  {
    title: "Meet the Khumalos",
    image: "/images/meet-the-khumalos.jpg",
    genre: "Drama /Comedy",
    description: "Two moms- once best friends turned enemies- go to war when they find out their children are madly in love.",
    trailerUrl: "https://www.youtube.com/watch?v=zvLMwhL7BBg",
  },
  {
    title: "It Takes Two",
    image: "/images/it-takes-two.jpg",
    genre: "Romantic Comedy/family",
    description: "Two identical strangers, separated at birth, meet for the first time at summer camp and decide to switch places to reunite their divorced parents.",
    trailerUrl: "https://www.youtube.com/watch?v=yh1OH4NnLWQ",
  },
];

export default function Workflows() {
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = (index: number) => {
    setHoveredMovie(index);
    // Delay unmuting by 500ms to avoid sudden sound
    setTimeout(() => setIsMuted(false), 500);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
    setIsMuted(true);
  };

  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Choose One to Watch Tonight
            </h2>
            <p className="text-lg text-indigo-200/65">
              Select a movie and let me know when you're ready to start. I'll be waiting for you.
            </p>
          </div>

          {/* Movie cards grid */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-2">
            {movieData.map((movie, index) => (
              <div
                key={index}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:after:opacity-20 group-hover:before:opacity-100 transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                  <div className="relative h-[288px] w-full">
                    {hoveredMovie === index && movie.trailerUrl ? (
                      <iframe
                        className="absolute inset-0 h-full w-full transition-opacity duration-300"
                        src={`${getEmbedUrl(movie.trailerUrl)}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <Image
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
                        src={movie.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={movie.title}
                        priority
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {movie.genre}
                        </span>
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">{movie.title}</h3>
                    <p className="text-indigo-200/65 line-clamp-2">
                      {movie.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
