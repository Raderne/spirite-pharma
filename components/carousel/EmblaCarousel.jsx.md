## Table of Contents 🔗

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
  - [Example Usage](#example-usage)
- [Properties](#properties)
- [Methods](#methods)
- [Events](#events)

## About ℹ️

The `EmblaCarousel` component is a React component that wraps the Embla Carousel library. It allows you to create a carousel with a variety of options, including autoplay, loop, and slides per view.

## Installation 📦

```bash
npm install embla-carousel-react
```

## Usage 🛠️

To use the `EmblaCarousel` component, you must pass it a `slides` prop that is an array of React elements. You can also pass it an `options` prop that is an object of options for the Embla Carousel library.

```javascript
import EmblaCarousel from "./EmblaCarousel";

const slides = [
  <div>Slide 1</div>,
  <div>Slide 2</div>,
  <div>Slide 3</div>,
];

const options = {
  loop: true,
  autoplay: true,
};

const Carousel = () => (
  <EmblaCarousel slides={slides} options={options} />
);

export default Carousel;
```

### Example Usage 💡

The following code sample shows you how to use the `EmblaCarousel` component:

```javascript
import EmblaCarousel from "./EmblaCarousel";

const slides = [
  {
    id: 1,
    title: "Slide 1",
    description: "This is the first slide.",
  },
  {
    id: 2,
    title: "Slide 2",
    description: "This is the second slide.",
  },
  {
    id: 3,
    title: "Slide 3",
    description: "This is the third slide.",
  },
];

const options = {
  loop: true,
  autoplay: true,
};

const Carousel = () => (
  <EmblaCarousel slides={slides} options={options} />
);

export default Carousel;
```

## Properties ⚙️

The `EmblaCarousel` component accepts the following properties:

| Property | Type | Description |
|---|---|---|
| `slides` | array | An array of React elements that represent the slides in the carousel. |
| `options` | object | An object of options for the Embla Carousel library. |

## Methods 🛠️

The `EmblaCarousel` component provides the following methods:

| Method | Description |
|---|---|
| `emblaApi.scrollNext()` | Scrolls the carousel to the next slide. |
| `emblaApi.scrollPrev()` | Scrolls the carousel to the previous slide. |
| `emblaApi.scroll(index)` | Scrolls the carousel to the slide at the specified index. |
| `emblaApi.slideTo(index)` | Slides to the slide at the specified index. |
| `emblaApi.reset()` | Resets the carousel to the initial slide. |
| `emblaApi.destroy()` | Destroys the carousel. |

## Events 📢

The `EmblaCarousel` component emits the following events:

| Event | Description |
|---|---|
| `onScroll` | Emitted when the carousel scrolls. |
| `onSlide` | Emitted when the carousel slides to a new slide. |
| `onReInit` | Emitted when the carousel is reinitialized. |
| `onDestroy` | Emitted when the carousel is destroyed. |