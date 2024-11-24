import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
const DetailsHeader = ({artistId, artistData,songData}) => {
 
  const backgroundRef = useRef(null);

  useEffect(() => {
    const imageUrl = artistId ? songData.artist.image_cover : songData.image;

    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = image.width;
      canvas.height = image.height;

      context.drawImage(image, 0, 0, image.width, image.height);

      // Obtenez les données de l'image du canvas
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

      // Calculez la couleur moyenne en parcourant les données de l'image
      let totalRed = 0;
      let totalGreen = 0;
      let totalBlue = 0;

      for (let i = 0; i < imageData.length; i += 4) {
        totalRed += imageData[i];
        totalGreen += imageData[i + 1];
        totalBlue += imageData[i + 2];
      }

      const averageRed = Math.round(totalRed / (imageData.length / 4));
      const averageGreen = Math.round(totalGreen / (imageData.length / 4));
      const averageBlue = Math.round(totalBlue / (imageData.length / 4));

      const dominantColor = `rgb(${averageRed}, ${averageGreen}, ${averageBlue})`;

      // Définissez la couleur de fond du div parent avec la couleur dominante
      backgroundRef.current.style.backgroundColor = dominantColor;
    };
  }, [artistId, songData]);

  return (

  <div className="relative w-full flex flex-col mt-20 ">
    <div syle={{}} ref={backgroundRef} className="w-full   sm:h-48 h-28">
      <div className="absolute inset-0 flex items-center p-6">
    <img src={artistId?songData.artist.image_cover:songData.image} alt="art" className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" />

    <div className="ml-5">
      <p className="font-bold sm:text-3xl text-xl text-white">{songData?.titre}</p>

    {
      !artistId && (
        <Link to={`/artists/${songData?.artistid}`}>
           <p className="text-base text-gray-400 mt-2">
            {songData?.artist.Nom}
           </p>
        
        </Link>
      )}
    <p className="text-base text-gray-400 mt-2">
      { songData?.categorie}
    </p>
    </div>

      </div>
    </div>
  </div>
);
}
export default DetailsHeader;
