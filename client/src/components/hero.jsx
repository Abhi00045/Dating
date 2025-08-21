import React from "react";
import { Calendar, MapPin, Star, Users } from "lucide-react";

export default function DatingShowHero() {
  return (
    <div className=" w-full ">
      {/* Title */}
      <h1 className="text-6xl font-bold text-center pt-8 text-pink-600">
        Blind Date Live
      </h1>

      {/* Main Hero Image */}
      <div className=" max-w-6xl mx-auto mt-8 rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          alt="Dating Show"
          className="w-full h-[450px] object-cover"
        />

        {/* Top Left Badges */}
        {/* <div className="absolute top-4 left-4 flex gap-3">
          <span className="px-4 py-1 bg-white/70 text-sm font-medium rounded-full shadow">
            Live Games
          </span>
          <span className="px-4 py-1 bg-white/70 text-sm font-medium rounded-full shadow">
            Flirty Challenges
          </span>
        </div> */}
      </div>
    </div>
  );
}
