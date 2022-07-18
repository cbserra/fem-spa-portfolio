export enum NavDirection {
  PREV = "prev",
  NEXT = "next",
}

// eslint-disable-next-line import/no-unused-modules
export type NullableHTMLImageElement = HTMLImageElement | null;
export type NullableHTMLLIElement = HTMLLIElement | null | undefined;

// export interface CarouselIface {
//   getPrevBtn(): HTMLButtonElement;
//   getNextBtn(): HTMLButtonElement;
//   getTrack(): HTMLUListElement;
//   getTrackContainer(): HTMLDivElement;
//   getSlides(): HTMLCollectionOf<HTMLDivElement>;
//   getSlideImages(): NullableHTMLImageElement[];
//   // getSlideWidth(): number | undefined;
//   getCarouselContainer(): HTMLDivElement;
//   getNewSlide(): NullableHTMLLIElement;
// }

// const CURRENT_SLIDE_CLASS_NAME = ".current-slide";

export class Carousel {
  // implements CarouselIface {
  private carouselContainer: HTMLDivElement;
  private trackContainer: HTMLDivElement;
  private track: HTMLUListElement;
  private currentSlide: HTMLLIElement;
  private newSlide?: HTMLLIElement | null;
  private prevBtn: HTMLButtonElement;
  private nextBtn: HTMLButtonElement;

  constructor(
    carousel: HTMLDivElement,
    trackContainer: HTMLDivElement,
    track: HTMLUListElement,
    currentSlide: HTMLLIElement,
    prevBtn: HTMLButtonElement,
    nextBtn: HTMLButtonElement
  ) {
    this.carouselContainer = carousel;
    this.trackContainer = trackContainer;
    this.track = track;
    this.currentSlide = currentSlide;
    this.setPrevBtn(prevBtn);
    this.setNextBtn(nextBtn);
  }

  public getCarouselContainer(): HTMLDivElement {
    return this.carouselContainer;
  }

  // public getSlideWidth(): number | undefined {
  //   return this.currentSlide?.getBoundingClientRect().width;
  // }

  public getTrackContainer(): HTMLDivElement {
    return this.trackContainer;
  }

  public getTrack(): HTMLUListElement {
    return this.track;
  }

  public getCurrentSlide(): HTMLLIElement {
    return this.currentSlide;
  }

  public updateCurrentSlideWithNew(newSlide: HTMLLIElement): void {
    this.getCurrentSlide()?.classList.remove("current-slide");
    newSlide?.classList.add("current-slide");

    this.setCurrentSlide(newSlide);
    this.setNewSlide(null);
  }

  private setCurrentSlide(currentSlide: HTMLLIElement): void {
    this.currentSlide = currentSlide;
  }

  public getPrevBtn(): HTMLButtonElement {
    return this.prevBtn;
  }

  private setPrevBtn(prevBtn: HTMLButtonElement): void {
    this.prevBtn = prevBtn;
  }

  public getNextBtn(): HTMLButtonElement {
    return this.nextBtn;
  }

  private setNextBtn(nextBtn: HTMLButtonElement): void {
    this.nextBtn = nextBtn;
  }

  public getSlides(): HTMLCollectionOf<HTMLDivElement> {
    return this.track.children as HTMLCollectionOf<HTMLDivElement>;
  }

  public getSlideImages(): NullableHTMLImageElement[] {
    const slides = this.getSlides();
    return Array.from(slides).flatMap((slide) =>
      slide.getElementsByTagName("img").item(0)
    );
  }

  public getNewSlide(): NullableHTMLLIElement {
    return this.newSlide;
  }

  public setNewSlide(nextSlide: NullableHTMLLIElement): void {
    this.newSlide = nextSlide;
  }
}
