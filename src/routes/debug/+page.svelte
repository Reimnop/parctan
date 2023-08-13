<div class="mx-auto grid w-full max-w-7xl grid-cols-2">
  <div
    class="not-prose rounded-box grid gap-3 border border-base-content/5 bg-base-100 p-6 text-base-content"
  >
    <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
      <button class="btn">Default</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-error">Error</button>
    </div>
    <div class="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
      <span class="badge">Default</span>
      <span class="badge badge-primary">Primary</span>
      <span class="badge badge-secondary">Secondary</span>
      <span class="badge badge-accent">Accent</span>
      <span class="badge badge-info">Info</span>
      <span class="badge badge-success">Success</span>
      <span class="badge badge-warning">Warning</span>
      <span class="badge badge-error">Error</span>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-3 md:flex-row">
        <div class="md:w-1/2">
          <div class="tabs">
            <button class="tab tab-lifted">Tab</button>
            <button class="tab tab-active tab-lifted">Tab</button>
            <button class="tab tab-lifted">Tab</button>
          </div>
          <div class="flex flex-col">
            <span class="link">I'm a simple link</span>
            <span class="link-primary link">I'm a simple link</span>
            <span class="link-secondary link">I'm a simple link</span>
            <span class="link-accent link">I'm a simple link</span>
          </div>
        </div>
        <div class="flex flex-col gap-3 md:w-1/2">
          <progress value="20" max="100" class="progress">Default</progress>
          <progress value="25" max="100" class="progress progress-primary">Primary</progress>
          <progress value="30" max="100" class="progress progress-secondary">Secondary</progress>
          <progress value="40" max="100" class="progress progress-accent">Accent</progress>
          <progress value="45" max="100" class="progress progress-info">Info</progress>
          <progress value="55" max="100" class="progress progress-success">Success</progress>
          <progress value="70" max="100" class="progress progress-warning">Warning</progress>
          <progress value="90" max="100" class="progress progress-error">Error</progress>
        </div>
      </div>
      <div class="flex flex-col gap-3 md:flex-row">
        <div class="stats border border-base-300 bg-base-300 md:w-1/2">
          <div class="stat">
            <div class="stat-title">Total Page Views</div>
            <div class="stat-value">89,400</div>
            <div class="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-3 md:w-1/2">
          <div class="radial-progress" style="--value:60;--size:3.5rem">60%</div>
          <div class="radial-progress" style="--value:75;--size:3.5rem">75%</div>
          <div class="radial-progress" style="--value:90;--size:3.5rem">90%</div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-3 md:flex-row">
        <div class="md:w-1/2">
          <div>
            <input type="checkbox" class="toggle" checked />
            <input type="checkbox" class="toggle toggle-primary" checked />
            <input type="checkbox" class="toggle toggle-secondary" checked />
            <input type="checkbox" class="toggle toggle-accent" checked />
          </div>
          <div>
            <input type="checkbox" class="checkbox" checked />
            <input type="checkbox" class="checkbox-primary checkbox" checked />
            <input type="checkbox" class="checkbox-secondary checkbox" checked />
            <input type="checkbox" class="checkbox-accent checkbox" checked />
          </div>
          <div>
            <input type="radio" name="radio-1" class="radio" checked />
            <input type="radio" name="radio-1" class="radio-primary radio" />
            <input type="radio" name="radio-1" class="radio-secondary radio" />
            <input type="radio" name="radio-1" class="radio-accent radio" />
          </div>
        </div>
        <div class="md:w-1/2">
          <input type="range" min="0" max="100" value="90" class="range range-xs" />
          <input type="range" min="0" max="100" value="70" class="range range-primary range-xs" />
          <input type="range" min="0" max="100" value="50" class="range range-secondary range-xs" />
          <input type="range" min="0" max="100" value="40" class="range range-accent range-xs" />
        </div>
      </div>
      <div class="flex flex-col gap-3 md:flex-row">
        <div class="flex flex-col gap-3 md:w-1/2">
          <input type="text" placeholder="Default" class="input input-bordered w-full" />
          <input
            type="text"
            placeholder="Primary"
            class="input input-bordered input-primary w-full"
          />
          <input
            type="text"
            placeholder="Secondary"
            class="input input-bordered input-secondary w-full"
          />
          <input
            type="text"
            placeholder="Accent"
            class="input input-bordered input-accent w-full"
          />
        </div>
        <div class="flex flex-col gap-3 md:w-1/2">
          <input type="text" placeholder="Info" class="input input-bordered input-info w-full" />
          <input
            type="text"
            placeholder="Success"
            class="input input-bordered input-success w-full"
          />
          <input
            type="text"
            placeholder="Warning"
            class="input input-bordered input-warning w-full"
          />
          <input type="text" placeholder="Error" class="input input-bordered input-error w-full" />
        </div>
      </div>
      <div class="navbar rounded-box bg-neutral text-neutral-content">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex-1"><button class="btn btn-ghost text-xl normal-case">daisyUI</button></div>
      </div>
      <div class="flex gap-3">
        <div class="flex flex-grow flex-col gap-3">
          <div class="text-4xl font-bold">Text Size 1</div>
          <div class="text-3xl font-bold">Text Size 2</div>
          <div class="text-2xl font-bold">Text Size 3</div>
          <div class="text-xl font-bold">Text Size 4</div>
          <div class="text-lg font-bold">Text Size 5</div>
          <div class="text-sm font-bold">Text Size 6</div>
          <div class="text-xs font-bold">Text Size 7</div>
        </div>
        <ul class="steps steps-vertical">
          <li class="step step-primary">Step 1</li>
          <li class="step step-primary">Step 2</li>
          <li class="step">Step 3</li>
          <li class="step">Step 4</li>
        </ul>
      </div>
    </div>
  </div>
  <div
    class="not-prose rounded-box grid gap-3 border border-base-content/5 bg-base-100 p-6 text-base-content"
  >
    <div class="flex flex-col gap-3">
      <div class="alert">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 flex-shrink-0 stroke-info"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>12 unread messages. Tap to see.</span>
        </div>
      </div>
      <div class="alert alert-info">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 flex-shrink-0 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>New software update available.</span>
        </div>
      </div>
      <div class="alert alert-success">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      </div>
      <div class="alert alert-warning">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            ></path>
          </svg>
          <span>Warning: Invalid email address!</span>
        </div>
      </div>
      <div class="alert alert-error">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      </div>
    </div>
  </div>
</div>
