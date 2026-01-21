import Image from "next/image";

export const Links = (props) => {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      {props.items.map((item, index) => {
        return (
          <a
            key={index}
            className={item.className}
            href={item.href}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <Image
              className={item.imgClassName}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
            {item.description}
          </a>
        );
      })}
    </div>
  );
}
