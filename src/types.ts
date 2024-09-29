export interface VideoContentProps {
  id: number;
  type: "video";
  slash: string;
  duration: string;
  guest: string;
  topic: string;
  smallDescription: string;
  videoUrl: string;
}

export interface PodcastContentProps {
  id: number;
  type: "podcast";
  duration: string;
  guest: string;
  slash: string;
  topic: string;
  smallDescription: string;
  podcastUrl: string;
  description: string;
  imgUrl: string;
  reason: string;
}

export interface ArticleContentProps {
  id: number;
  type: "article";
  duration: string;
  guest: string;
  topic: string;
  smallDescription: string;
  imgUrl: string;
  description: string;
  slash: string;
  paragraph1: string;
  paragraph2: string;
  cta: string;
  elements: string;
  reads: string;
}

export type ExploreContentProps =
  | VideoContentProps
  | PodcastContentProps
  | ArticleContentProps;
