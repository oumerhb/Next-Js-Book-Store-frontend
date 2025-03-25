// app/LandingPageClient.tsx
"use client";

interface Props {
  children: React.ReactNode;
}

export default function LandingPageClient({ children }: Props) {
  return <div>{children}</div>;
}