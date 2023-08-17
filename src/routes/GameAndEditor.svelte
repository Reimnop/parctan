<svg class="flex-1" viewBox="0 0 606 293" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <g id="editor">
      <g clip-path="url(#clip0_105_15)">
        <rect
          width="414.813"
          height="207.296"
          rx="16"
          transform="matrix(0.996523 0.0833126 -0.077432 0.996998 155.051 51)"
          fill="#1A1919"
        />
        <rect
          opacity="0.05"
          width="414.813"
          height="50.2906"
          transform="matrix(0.996523 0.0833126 -0.077432 0.996998 142.894 207.534)"
          fill="#FAFAFA"
        />
        <rect
          opacity="0.1"
          width="79.3735"
          height="103.035"
          transform="matrix(0.996523 0.0833126 -0.077432 0.996998 486.665 113.188)"
          fill="#FAFAFA"
        />
        <rect
          opacity="0.15"
          width="79.3735"
          height="103.035"
          transform="matrix(0.996523 0.0833126 -0.077432 0.996998 407.567 106.575)"
          fill="#FAFAFA"
        />
        <rect
          opacity="0.2"
          width="158.747"
          height="15.9458"
          transform="matrix(0.996523 0.0833126 -0.077432 0.996998 408.802 90.6772)"
          fill="#FAFAFA"
        />
        <rect
          opacity="0.25"
          width="256.066"
          height="118.98"
          transform="matrix(0.996523 0.0833126 -0.077432 0.996998 153.627 69.3438)"
          fill="#FAFAFA"
        />
      </g>
    </g>
    <g id="game">
      <g clip-path="url(#clip1_105_15)">
        <rect
          width="431.893"
          height="215.504"
          rx="16"
          transform="matrix(0.998731 -0.0503658 0.0423361 0.999103 39 63.7527)"
          fill="#1A1919"
        />
        <rect
          opacity="0.35"
          width="431.893"
          height="215.504"
          transform="matrix(0.998731 -0.0503658 0.0423361 0.999103 39 63.7527)"
          fill="#FAFAFA"
        />
        <g>
          <rect
            width="143.725"
            height="4.11978"
            transform="matrix(0.998731 -0.0503658 0.0423361 0.999103 191.419 249.027)"
            fill="#FAFAFA"
          />
          <rect
            width="8"
            height="13.3893"
            rx="4"
            transform="matrix(0.998731 -0.0503658 0.0423361 0.999103 327.05 237.547)"
            fill="#FAFAFA"
          />
          <rect
            width="8"
            height="13.3893"
            rx="4"
            transform="matrix(0.998731 -0.0503658 0.0423361 0.999103 191.223 244.397)"
            fill="#FAFAFA"
          />
        </g>
        <g id="player">
          <rect
            id="head-blur"
            width="31.5"
            height="31.5"
            rx="7"
            transform="matrix(0.99873 -0.0503792 0.0423494 0.999103 241.199 113.608)"
            fill="url(#paint0_linear_105_15)"
          />
          <rect
            width="31.5"
            height="31.5"
            rx="7"
            transform="matrix(0.99873 -0.0503792 0.0423494 0.999103 241.199 113.608)"
            fill="url(#paint1_linear_105_15)"
          />
          <rect
            id="head-top"
            width="31.5"
            height="31.5"
            rx="7"
            transform="matrix(0.99873 -0.0503792 0.0423494 0.999103 241.199 113.608)"
            fill="#DD9B9B"
          />
          <rect
            width="15.75"
            height="15.75"
            rx="7"
            transform="matrix(0.99873 -0.0503792 0.0423494 0.999103 250.769 153.425)"
            fill="#FAFAFA"
          />
          <rect
            width="12.25"
            height="12.25"
            rx="6.125"
            transform="matrix(0.99873 -0.0503792 0.0423494 0.999103 253.554 177.815)"
            fill="#FAFAFA"
          />
          <rect
            width="10.5"
            height="10.5"
            rx="5.25"
            transform="matrix(0.99873 -0.0503792 0.0423494 0.999103 255.317 198.752)"
            fill="#FAFAFA"
          />
        </g>
      </g>
    </g>
  </g>
  <defs>
    <linearGradient
      id="paint0_linear_105_15"
      x1="34.3644"
      y1="-1.13184"
      x2="-13.9742"
      y2="46.2679"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FF5EDA" />
      <stop offset="1" stop-color="#31B8EC" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_105_15"
      x1="34.3644"
      y1="-1.13184"
      x2="-13.9742"
      y2="46.2679"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FF5EDA" />
      <stop offset="1" stop-color="#31B8EC" />
    </linearGradient>
    <clipPath id="clip0_105_15">
      <rect
        width="414.813"
        height="207.296"
        rx="16"
        transform="matrix(0.996523 0.0833126 -0.077432 0.996998 155.051 51)"
        fill="white"
      />
    </clipPath>
    <clipPath id="clip1_105_15">
      <rect
        width="431.893"
        height="215.504"
        rx="16"
        transform="matrix(0.998731 -0.0503658 0.0423361 0.999103 39 63.7527)"
        fill="white"
      />
    </clipPath>
  </defs>
</svg>

<style lang="postcss">
  svg * {
    @apply motion-safe:animate-[1s_cubic-bezier(0.85,_0,_0.15,_1)_0s_infinite_alternate_both_running];
  }

  #editor {
    animation-name: editor;
    @apply origin-center;
  }

  #game {
    animation-name: game;
    @apply origin-center;
  }

  #player {
    animation-name: player;
    @apply origin-center;
  }

  #head-top {
    animation-name: head-top;
  }

  #head-blur {
    animation-name: head-blur;
  }

  @keyframes editor {
    0% {
      opacity: 50%;
    }
    100% {
      transform: scale(1.05) rotate(2deg) translate(1rem, -1.1rem);
    }
  }
  @keyframes game {
    100% {
      transform: scale(1.1) rotate(-3deg) translate(-0.3rem, -1.2rem);
    }
  }
  @keyframes player {
    0% {
      opacity: 75%;
    }
    100% {
      transform: scale(1.1) rotate(-8deg) translate(-0.1rem, -0.8rem);
    }
  }
  @keyframes head-top {
    100% {
      opacity: 0%;
    }
  }

  @keyframes head-blur {
    0% {
      opacity: 0%;
    }
    100% {
      filter: blur(1rem) contrast(1.5);
    }
  }
</style>
