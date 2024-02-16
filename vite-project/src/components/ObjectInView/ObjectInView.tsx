import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardHeader, Image } from "@nextui-org/react";

import "./ObjectInView.css";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const ObjectInView = () => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true });

  return (
    <>
      <Card
        radius="none"
        className="col-span-12 sm:col-span-4 h-[300px]"
        ref={cardRef}
        style={{
          opacity: isCardInView ? 1 : 0,
          transform: isCardInView ? "none" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-white font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader>
        <Image
          radius="none"
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://i.pinimg.com/originals/5b/e0/a1/5be0a1b5a6a50d8fdc91df74ba19e741.jpg"
        />
      </Card>
      <Section>in</Section>
      <Section>view!</Section>
    </>
  );
};

export { ObjectInView };
