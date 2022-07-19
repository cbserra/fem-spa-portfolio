import { Carousel, NavDirection, NullableHTMLLIElement } from "./types";

const getDifference = (
  currentSlidePosition: number,
  nextSlidePosition: number
) => {
  if (currentSlidePosition * nextSlidePosition > 0) {
    return currentSlidePosition > nextSlidePosition
      ? Math.abs(currentSlidePosition) - Math.abs(nextSlidePosition)
      : Math.abs(nextSlidePosition) - Math.abs(currentSlidePosition);
  }

  return Math.abs(currentSlidePosition) + Math.abs(nextSlidePosition);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const debug = (car: Carousel): void => {
  console.debug(
    "🚀 ~ file: index.ts ~ line 29 ~ debug ~ car.getCarouselContainer",
    car.getCarouselContainer()
  );
  console.debug(
    "🚀 ~ file: index.ts ~ line 28 ~ debug ~ car.getPrevBtn()",
    car.getPrevBtn()
  );
  console.debug(
    "🚀 ~ file: index.ts ~ line 29 ~ debug ~ car.getNextBtn()",
    car.getNextBtn()
  );
  console.log(
    "🚀 ~ file: index.ts ~ line 29 ~ debug ~ car.getTrackContainer();",
    car.getTrackContainer()
  );

  console.debug(
    "🚀 ~ file: index.ts ~ line 31 ~ debug ~ car.getTrack().getBoundingClientRect()",
    car.getTrack().getBoundingClientRect()
  );
  console.debug(
    "🚀 ~ file: index.ts ~ line 35 ~ debug ~ car.getCurrentSlide().getBoundingClientRect()",
    car.getCurrentSlide().getBoundingClientRect()
  );
  console.debug(
    "🚀 ~ file: index.ts ~ line 38 ~ debug ~ car.getNewSlide()?.getBoundingClientRect()",
    car.getNewSlide()?.getBoundingClientRect()
  );
};

const getNewSlide = (
  carousel: Carousel,
  direction: NavDirection
): NullableHTMLLIElement => {
  const currSlide = carousel.getCurrentSlide();
  return (
    direction === NavDirection.NEXT
      ? currSlide?.nextElementSibling
      : currSlide?.previousElementSibling
  ) as NullableHTMLLIElement;
};

const calculateTrackMovement = (
  carousel: Carousel,
  direction: NavDirection
): number => {
  const track = carousel.getTrack();
  const trackTransformValue = track.style.transform;

  const start = !trackTransformValue
    ? 0
    : parseInt(trackTransformValue.split("(")[1].split(")")[0].split("px")[0]);

  const currSlide = carousel.getCurrentSlide();
  const nxtSlide = carousel.getNewSlide();

  const currentLeft = currSlide?.getBoundingClientRect().left ?? 0;
  const nextLeft = nxtSlide?.getBoundingClientRect().left ?? 0;

  const amountToMove = getDifference(currentLeft, nextLeft);

  const transformPixels =
    direction === NavDirection.NEXT
      ? start - amountToMove
      : start + amountToMove;
  return transformPixels;
};

// const trackLeft = carousel.getTrack().getBoundingClientRect().left;
// if (direction === NavDirection.NEXT) {
//   console.log(
//     "🚀 ~ file: index.ts ~ line 91 ~ trackLeft - amountToMove",
//     trackLeft - amountToMove
//   );
//   return trackLeft - amountToMove;
// } else {
//   console.log(
//     "🚀 ~ file: index.ts ~ line 94 ~ trackLeft + amountToMove",
//     trackLeft + amountToMove
//   );
//   return trackLeft + amountToMove;
// }

// const alignTrackWithCurrentSlide = (carousel: Carousel): void => {
//   const trackLeft = carousel.getTrack().getBoundingClientRect().left;
//   const currentSlideLeft = carousel
//     .getCurrentSlide()
//     .getBoundingClientRect().left;
//   const difference = currentSlideLeft - trackLeft;

//   transformTrack(carousel, difference);
// };

const moveToSlide = (
  _event: MouseEvent,
  carousel: Carousel,
  direction: NavDirection
): void => {
  const newSlide = getNewSlide(carousel, direction);
  if (newSlide) {
    const nonNullNewSlide = newSlide as HTMLLIElement;
    carousel.setNewSlide(nonNullNewSlide);

    const trackMovement = calculateTrackMovement(carousel, direction);

    carousel.setTrackTransform(trackMovement);
    carousel.updateCurrentSlideWithNew(newSlide);

    if (endOfSlides(carousel, direction)) {
      disableButton(carousel, direction);
      // wrapSlides(carousel, direction);
    } else {
      enableButtons(carousel);
    }
  }
};

const enableButtons = (carousel: Carousel): void => {
  carousel.getNextBtn().disabled = false;
  carousel.getPrevBtn().disabled = false;
};

const disableButton = (carousel: Carousel, direction: NavDirection): void => {
  if (direction === NavDirection.NEXT) {
    carousel.getNextBtn().disabled = true;
  } else {
    carousel.getPrevBtn().disabled = true;
  }
};

const endOfSlides = (carousel: Carousel, direction: NavDirection): boolean => {
  const currentSlide = carousel.getCurrentSlide();

  let endOfSlides: boolean;
  if (direction === NavDirection.NEXT) {
    endOfSlides = currentSlide.nextElementSibling === null;
  } else {
    endOfSlides = currentSlide.previousElementSibling === null;
  }
  return endOfSlides;
};

// const wrapSlides = (carousel: Carousel, direction: NavDirection): void => {
//   const track = carousel.getTrack();
//   const firstSlide = track.firstElementChild as HTMLLIElement;
//   const lastSlide = track.lastElementChild as HTMLLIElement;
//   if (direction === NavDirection.NEXT) {
//     const appendedChild = track.appendChild(firstSlide);
//     const movedChild = track.removeChild(firstSlide);
//   } else {
//     const insertedChild = track.insertBefore(lastSlide, firstSlide);
//     const movedChild = track.removeChild(lastSlide);
//   }
// };

// const wrapSlides = (carousel: Carousel, direction: NavDirection): void => {
//   const track = carousel.getTrack();
//   const firstSlide = track.firstElementChild as HTMLLIElement;
//   const lastSlide = track.lastElementChild as HTMLLIElement;
//   if (direction === NavDirection.NEXT) {
//     track.appendChild(firstSlide);
//   } else {
//     track.insertBefore(firstSlide, lastSlide);
//   }
// };

// const transformTrack = (carousel: Carousel, pixels: number): void => {

//   carousel.getTrack().style.transform = "translateX(" + pixels + "px)";

//   setTimeout(() => {
//   }, 1000);
// };

const setupCarousel = (): Carousel => {
  const carouselDiv = document.querySelector(".carousel") as HTMLDivElement;
  const trackContainer = carouselDiv?.querySelector(
    ".carousel__track-container"
  ) as HTMLDivElement;
  const track = trackContainer.querySelector(
    ".carousel__track"
  ) as HTMLUListElement;
  const currentSlide = track.querySelector(".current-slide") as HTMLLIElement;
  const prevBtn = carouselDiv?.querySelector(
    ".carousel__nav-prev"
  ) as HTMLButtonElement;
  const nextBtn = carouselDiv?.querySelector(
    ".carousel__nav-next"
  ) as HTMLButtonElement;

  const car = new Carousel(
    carouselDiv,
    trackContainer,
    track,
    currentSlide,
    prevBtn,
    nextBtn
  );

  // alignTrackWithCurrentSlide(car);
  // car.init();
  // debug(car);

  car
    .getNextBtn()
    .addEventListener("click", (evt) =>
      moveToSlide(evt, car, NavDirection.NEXT)
    );

  car
    .getPrevBtn()
    .addEventListener("click", (evt) =>
      moveToSlide(evt, car, NavDirection.PREV)
    );

  return car;
};

class CarouselHolder {
  private carousel: Carousel;
  constructor(carousel: Carousel) {
    this.carousel = carousel;
  }
  public getCarousel(): Carousel {
    return this.carousel;
  }
  public setCarousel(carousel: Carousel): void {
    this.carousel = carousel;
  }
  public hasInstance(): boolean {
    return this.carousel !== undefined;
  }
}

const carouselHolder = new CarouselHolder(setupCarousel());

window.addEventListener("resize", (evt) => {
  if (evt?.type === "resize" && carouselHolder.hasInstance()) {
    const carousel = carouselHolder.getCarousel();
    carousel.resetCurrentSlide();
    carousel.resetTrackTransform();
    enableButtons(carousel);
  }
});

// prev button will slide the track to the left, or go to the end if we're at the beginning
// next button will slide the track to the right, or start over if we're at the end
