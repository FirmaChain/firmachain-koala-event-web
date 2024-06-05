declare module 'react-svg' {
  import * as React from 'react';

  interface ReactSVGProps extends React.SVGAttributes<SVGElement> {
    src: string;
  }

  export class ReactSVG extends React.Component<ReactSVGProps> {}
}
