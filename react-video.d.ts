declare module "react-video" {
  import * as React from "react";

  export interface PlayerProps extends React.HTMLProps<HTMLVideoElement> {
    src: string;
    autoPlay?: boolean;
    loop?: boolean;
    controls?: boolean;
    muted?: boolean;
  }

  export class Player extends React.Component<PlayerProps> {}
  export class Controls extends React.Component {}
}
