import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-40vw h-96 mx-8">
              <Image
                alt="Kitten 1"
                src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                fill
                className="rounded-md object-cover"
                priority
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-96 mx-8">
              <Image
                alt="Kitten 2"
                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                fill
                className="rounded-md object-cover"
                priority
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-96 mx-8">
              <Image
                alt="Kitten 3"
                src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                fill
                className="rounded-md object-cover"
                priority
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">
          <button className="p-2 bg-gray-800 rounded-full">Prev</button>
        </CarouselPrevious>

        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white">
          <button className="p-2 bg-gray-800 rounded-full">Next</button>
        </CarouselNext>
      </Carousel>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
      <div>Project</div>
    </div>
  );
};

export default HomePage;
