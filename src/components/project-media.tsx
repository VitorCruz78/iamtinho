import Image from "next/image";

import { ProjectVideo } from "@/components/project-video";
import type { Project, ProjectImage } from "@/content/site";

const FRAME = "overflow-hidden rounded-xl border border-line bg-background";

type ProjectMediaProps = {
  media: Project["media"];
  labelledBy: string;
  describedBy: string;
};

export function ProjectMedia({
  media,
  labelledBy,
  describedBy,
}: ProjectMediaProps) {
  const { main, phone, gallery } = media;

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
        <div className={FRAME}>
          {main.kind === "video" ? (
            <ProjectVideo
              src={main.src}
              poster={main.poster}
              labelledBy={labelledBy}
              describedBy={describedBy}
            />
          ) : (
            <ThemedImage
              image={main}
              sizes="(min-width: 1024px) 44rem, (min-width: 640px) 75vw, 100vw"
              className="h-auto w-full"
            />
          )}
        </div>

        {/* O celular fica ancorado no topo e é cortado embaixo, na altura da mídia principal. */}
        <div className={`relative h-80 sm:h-auto ${FRAME}`}>
          <ThemedImage
            image={phone}
            sizes="(min-width: 640px) 12rem, 11rem"
            className="absolute left-1/2 top-6 w-44 -translate-x-1/2 rounded-t-lg border border-line sm:w-4/5"
          />
        </div>
      </div>

      {gallery ? (
        <div className="hidden gap-3 sm:grid sm:grid-cols-2">
          {gallery.map((image) => (
            <div key={image.src} className={FRAME}>
              <ThemedImage
                image={image}
                sizes="(min-width: 1024px) 30rem, 50vw"
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

type ThemedImageProps = {
  image: ProjectImage;
  sizes: string;
  className: string;
};

// As duas versões ficam lazy: só a visível no tema atual é baixada.
function ThemedImage({ image, sizes, className }: ThemedImageProps) {
  const { src, darkSrc, alt, width, height } = image;
  const props = { width, height, sizes };

  if (!darkSrc) {
    return (
      <Image {...props} alt={alt} src={src} className={`${className} block`} />
    );
  }

  return (
    <>
      <Image
        {...props}
        alt={alt}
        src={src}
        className={`${className} block dark:hidden`}
      />
      <Image
        {...props}
        alt={alt}
        src={darkSrc}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
