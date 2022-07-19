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
  private currentSlideInitialIndex: number;
  private newSlide?: HTMLLIElement | null;
  private prevBtn: HTMLButtonElement;
  private nextBtn: HTMLButtonElement;

  private readonly CURRENT_SLIDE_CLASS_NAME = "current-slide";

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
    this.currentSlideInitialIndex = this.getSlideIndex(this.currentSlide);
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
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
    this.getCurrentSlide()?.classList.remove(this.CURRENT_SLIDE_CLASS_NAME);
    newSlide?.classList.add(this.CURRENT_SLIDE_CLASS_NAME);

    this.setCurrentSlide(newSlide);
    this.setNewSlide(null);
  }

  public resetCurrentSlide(): void {
    this.updateCurrentSlideWithNew(
      this.getSlides()[this.currentSlideInitialIndex]
    );
  }

  public resetTrackTransform(): void {
    this.track.style.transform = "";
  }

  public getTrackTransform(): string {
    return this.track.style.transform;
  }

  public setTrackTransform(pixelValue: number): void {
    this.track.style.transform = `translateX(${pixelValue}px)`;
  }

  private setCurrentSlide(currentSlide: HTMLLIElement): void {
    this.currentSlide = currentSlide;
  }

  public getCurrentSlideInitialIndex(): number {
    return this.currentSlideInitialIndex;
  }

  public getPrevBtn(): HTMLButtonElement {
    return this.prevBtn;
  }

  public getNextBtn(): HTMLButtonElement {
    return this.nextBtn;
  }

  public getSlides(): HTMLCollectionOf<HTMLLIElement> {
    return this.track.children as HTMLCollectionOf<HTMLLIElement>;
  }

  // public getSlideImages(): NullableHTMLImageElement[] {
  //   const slides = this.getSlides();
  //   return Array.from(slides).flatMap((slide) =>
  //     slide.getElementsByTagName("img").item(0)
  //   );
  // }

  public getNewSlide(): NullableHTMLLIElement {
    return this.newSlide;
  }

  public setNewSlide(nextSlide: NullableHTMLLIElement): void {
    this.newSlide = nextSlide;
  }

  private getSlideIndex(slide: HTMLLIElement): number {
    return Array.from(this.getSlides()).indexOf(slide);
  }
}
