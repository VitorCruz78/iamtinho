"use client";

import { useEffect, useRef } from "react";

const VISIBLE_RATIO = 0.5;

type ProjectVideoProps = {
  src: string;
  poster: string;
  labelledBy: string;
  describedBy: string;
};

export function ProjectVideo({
  src,
  poster,
  labelledBy,
  describedBy,
}: ProjectVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Sem loop, o fim do vídeo também dispara "pause" e conta como pausa do
    // usuário: ao voltar para a tela ele não recomeça sozinho.
    let pausedByUser = false;
    let pausingOffscreen = false;

    const onPlay = () => {
      pausedByUser = false;
    };
    const onPause = () => {
      if (pausingOffscreen) pausingOffscreen = false;
      else pausedByUser = true;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= VISIBLE_RATIO) {
          if (video.paused && !pausedByUser) {
            // O navegador pode barrar o autoplay; o poster e os controles seguem.
            video.play().catch(() => {});
          }
        } else if (!video.paused) {
          pausingOffscreen = true;
          video.pause();
        }
      },
      { threshold: VISIBLE_RATIO },
    );

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      width={1280}
      height={720}
      preload="metadata"
      muted
      playsInline
      controls
      className="block aspect-video h-auto w-full bg-background"
    >
      <a href={src}>Baixar o vídeo</a>
    </video>
  );
}
