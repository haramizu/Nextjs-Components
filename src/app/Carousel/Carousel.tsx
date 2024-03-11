"use client";

import Image from "next/image";
import Link from "next/link";

interface CarouselItem {
  imageUrl: string;
  linkUrl: string;
  text: string;
}

interface CarouselComponentProps {
  items: CarouselItem[];
}

export function CarouselComponent(props: CarouselComponentProps) {
  return (
    <>
      <div>
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>
              <Link href={item.linkUrl} target="_blank">
                <Image
                  src={item.imageUrl}
                  width="1024"
                  height="768"
                  className="w-1024 object-cover"
                  alt={item.text}
                />
                <p className="legend">{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
