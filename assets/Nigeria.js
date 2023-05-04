import * as React from "react";
const Nigeria = (props) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect x={0.911133} width={24} height={24} fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_3636_5561" transform="scale(0.0138889)" />
      </pattern>
      <image
        id="image0_3636_5561"
        width={72}
        height={72}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default Nigeria;
