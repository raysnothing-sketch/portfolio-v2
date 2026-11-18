export function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      focusable="false"
    >
      <path d="M12 .5C5.73.5.9 5.48.9 11.72c0 4.99 3.29 9.22 7.86 10.72.58.1.79-.25.79-.55v-1.94c-3.2.7-3.88-1.55-3.88-1.55-.52-1.35-1.28-1.71-1.28-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.8 2.7 1.28 3.36.98.1-.76.4-1.28.73-1.57-2.55-.3-5.23-1.31-5.23-5.83 0-1.29.45-2.34 1.19-3.17-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.18 1.2a10.9 10.9 0 0 1 5.79 0c2.2-1.51 3.17-1.2 3.17-1.2.63 1.63.23 2.83.12 3.13.74.83 1.18 1.88 1.18 3.17 0 4.53-2.69 5.52-5.25 5.81.41.37.78 1.09.78 2.2v3.26c0 .3.21.66.8.55 4.56-1.5 7.85-5.73 7.85-10.72C23.1 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      focusable="false"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
