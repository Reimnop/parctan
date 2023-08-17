<svg class="flex-1" viewBox="0 0 578 288" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="tools-example">
    <g id="editor">
      <g clip-path="url(#clip0_116_15)">
        <rect
          width="574.155"
          height="282.297"
          rx="16"
          transform="matrix(1 0 0.00589961 0.999983 1 1)"
          fill="#1A1919"
        />
        <rect
          id="Timeline"
          opacity="0.05"
          width="574.155"
          height="68.4862"
          transform="matrix(1 0 0.00589961 0.999983 2.26147 214.807)"
          fill="#FAFAFA"
        />
        <rect
          id="Right Pane"
          opacity="0.1"
          width="109.863"
          height="140.313"
          transform="matrix(1 0 0.00589961 0.999983 465.568 47.7703)"
          fill="#FAFAFA"
        />
        <rect
          id="Left Pane"
          opacity="0.15"
          width="109.863"
          height="140.313"
          transform="matrix(1 0 0.00589961 0.999983 355.705 47.7703)"
          fill="#FAFAFA"
        />
        <rect
          id="Title"
          opacity="0.2"
          width="219.727"
          height="21.7151"
          transform="matrix(1 0 0.00589961 0.999983 355.576 26.0555)"
          fill="#FAFAFA"
        />
        <rect
          id="Preview"
          opacity="0.25"
          width="354.429"
          height="162.028"
          transform="matrix(1 0 0.00589961 0.999983 1.14771 26.0555)"
          fill="#FAFAFA"
        />
      </g>
    </g>
    <g id="picture-frame">
      <rect
        id="picture-frame-bg"
        x="110"
        y="42"
        width="137.975"
        height="152.499"
        rx="16"
        fill="#FAFAFA"
      />
      <g id="picture" opacity="0.95">
        <rect x="125" y="56" width="109" height="107" rx="8" fill="#1A1919" />
        <path
          id="Hill"
          d="M158.045 106.88L137.48 138.202C134.988 141.997 137.71 147.04 142.25 147.04H211.545C216.493 147.04 219.096 141.173 215.776 137.505L199.017 118.988C196.825 116.566 193.051 116.475 190.745 118.789L187.058 122.488C184.576 124.979 180.454 124.654 178.393 121.805L167.438 106.666C165.095 103.429 160.238 103.54 158.045 106.88Z"
          fill="#FF5EDA"
        />
        <circle id="Ellipse 1" cx="204.077" cy="88.1929" r="13.1961" fill="#FF5EDA" />
      </g>
      <g id="picture-blur" opacity="0.95">
        <path
          id="Hill"
          d="M158.045 106.88L137.48 138.202C134.988 141.997 137.71 147.04 142.25 147.04H211.545C216.493 147.04 219.096 141.173 215.776 137.505L199.017 118.988C196.825 116.566 193.051 116.475 190.745 118.789L187.058 122.488C184.576 124.979 180.454 124.654 178.393 121.805L167.438 106.666C165.095 103.429 160.238 103.54 158.045 106.88Z"
          fill="#FF5EDA"
        />
        <circle id="Ellipse 1" cx="204.077" cy="88.1929" r="13.1961" fill="#FF5EDA" />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="clip0_116_15">
      <rect
        width="574.155"
        height="282.297"
        rx="16"
        transform="matrix(1 0 0.00589961 0.999983 1 1)"
        fill="white"
      />
    </clipPath>
  </defs>
</svg>

<style lang="postcss">
  svg * {
    @apply duration-200 ease-[cubic-bezier(0,0.55,0.45,1)];
  }

  #editor {
    @apply origin-center translate-x-[2.25rem] rotate-[5deg] scale-[0.85];
  }

  #picture-frame {
    @apply origin-center -translate-x-[3rem] -translate-y-[1rem] -rotate-[5deg] scale-[1.2];
  }

  @media (prefers-reduced-motion: no-preference) {
    :global(.group):hover #editor {
      @apply transform-none;
    }

    :global(.group):hover #picture-frame {
      @apply transform-none opacity-90;
    }

    :global(.group):hover #picture-frame-bg {
      @apply opacity-0;
    }

    :global(.group):hover #picture-blur {
      @apply opacity-50 blur-xl;
    }
  }
</style>
