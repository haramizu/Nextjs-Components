// components/ThemeSwitcher.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselItem {
  imageUrl: string;
  targetUrl: string;
  text: string;
}

interface CarouselComponentProps {
  items: CarouselItem[];
}

export function CarouselComponent(props: CarouselComponentProps) {
  return (
    <>
      <div className="mx-auto">
        <Carousel
          showArrows={true}
          autoPlay={true}
          showThumbs={true}
          infiniteLoop={true}
          // Show thumbnail using <Image> tag.
          renderThumbs={() =>
            props.items.map((item, index) => (
              <Image
                src={item.imageUrl}
                width="1024"
                height="768"
                alt="Text"
                key={index}
              />
            ))
          }
        >
          {props.items.map((item, index) => (
            <div key={index}>
              <Link href={item.targetUrl} target="_blank">
                <Image
                  src={item.imageUrl}
                  width="1024"
                  height="768"
                  alt={item.text}
                  onClick={() => (window.location.href = item.targetUrl)}
                />
                <p className="legend">{item.text}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
