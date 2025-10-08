import { InfiniteSlider } from "@/components/ui/infinite-slider-horizontal";
import Image from "next/image";

const images = [
  {
    title: "Image 1",
    image: "/water.jpg",
  },
  {
    title: "Image 2",
    image: "/delivery.webp",
  },
  {
    title: "Image 3",
    image: "/cargo.webp",
  },
  {
    title: "Image 4",
    image: "/trucks.jpeg",
  },
  {
    title: "Image 5",
    image: "/water.webp",
  },
  {
    title: "Image 1 second row",
    image: "/water.jpg",
  },
  {
    title: "Image 2 second row",
    image: "/delivery.webp",
  },
  {
    title: "Image 3 second row",
    image: "/cargo.webp",
  },
  {
    title: "Image 4 second row",
    image: "/trucks.jpeg",
  },
  {
    title: "Image 5 second row",
    image: "/water.webp",
  },
  {
    title: "Image 1 third row",
    image: "/water.jpg",
  },
  {
    title: "Image 2 third row",
    image: "/delivery.webp",
  },
  {
    title: "Image 3 third row",
    image: "/cargo.webp",
  },
  {
    title: "Image 4 third row",
    image: "/trucks.jpeg",
  },
  {
    title: "Image 5 third row",
    image: "/water.webp",
  },
];

export function InfiniteSliderHorizontal() {
  return (
    <div className="h-[600px] flex flex-col justify-center gap-6">
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteSlider direction="horizontal">
          {images.map((image) => (
            <div
              key={image.title}
              className="aspect-square w-[180px] rounded-[8px]"
            >
              <Image
                key={image.title}
                src={image.image}
                alt={image.title}
                width={1200}
                height={1200}
                className="object-cover h-full w-full rounded-[8px]"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteSlider direction="horizontal" reverse>
          {images.map((image) => (
            <div
              key={image.title}
              className="aspect-square w-[180px] rounded-[8px]"
            >
              <Image
                key={image.title}
                src={image.image}
                alt={image.title}
                width={1200}
                height={1200}
                className="object-cover h-full w-full rounded-[8px]"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteSlider direction="horizontal">
          {images.map((image) => (
            <div
              key={image.title}
              className="aspect-square w-[180px] rounded-[8px]"
            >
              <Image
                key={image.title}
                src={image.image}
                alt={image.title}
                width={1200}
                height={1200}
                className="object-cover h-full w-full rounded-[8px]"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
export default InfiniteSliderHorizontal;
