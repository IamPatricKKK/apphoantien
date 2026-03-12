type BrandMarkProps = {
  large?: boolean;
};

export function BrandMark({ large = false }: BrandMarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={large ? "h-10 w-10" : "h-6 w-6"} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 3h10a4 4 0 0 1 4 4v10h-4V7H7z" />
      <path d="M3 7h10a4 4 0 0 1 4 4v10H7a4 4 0 0 1-4-4z" />
      <path d="M10 8v8M10 12h5" />
    </svg>
  );
}

export function BrandShopIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 7V6a4 4 0 1 1 8 0v1" />
      <rect x="4" y="7" width="16" height="13" rx="3" />
      <path d="M9 13c.8 1 1.7 1.5 3 1.5s2.2-.5 3-1.5" />
    </svg>
  );
}

export function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 17H5a2 2 0 0 1 2-2V11a5 5 0 1 1 10 0v4a2 2 0 0 1 2 2z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function CogIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5z" />
      <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6z" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l7 3v5c0 5-3.5 8-7 10c-3.5-2-7-5-7-10V6z" />
    </svg>
  );
}

export function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 9V7a5 5 0 0 1 10 0v2" />
      <path d="M5 9h14l-1 11H6z" />
    </svg>
  );
}

export function TrendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 16l6-6l4 4l6-6" />
      <path d="M14 8h6v6" />
    </svg>
  );
}

export function BankIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 10h18" />
      <path d="M5 10v7M9 10v7M15 10v7M19 10v7" />
      <path d="M2 20h20" />
      <path d="M12 4L3 8h18z" />
    </svg>
  );
}

export function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h13a3 3 0 0 1 3 3v7H4z" />
      <path d="M4 7V6a2 2 0 0 1 2-2h11" />
      <path d="M16 13h4" />
    </svg>
  );
}

export function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </svg>
  );
}

export function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12v-7h7" />
      <path d="M20 12v7h-7" />
      <path d="M9 15l6-6" />
      <path d="M15 9h5V4" />
      <path d="M9 15H4v5" />
    </svg>
  );
}

export function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.1 0l2.8-2.8a5 5 0 0 0-7.1-7.1L11 4" />
      <path d="M14 11a5 5 0 0 0-7.1 0L4 13.8a5 5 0 1 0 7.1 7.1L13 20" />
    </svg>
  );
}

export function PasteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2l1.5-4A8 8 0 1 1 21 12z" />
    </svg>
  );
}

export function QrIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <path d="M14 14h3v3h-3zM20 14v7h-7" />
    </svg>
  );
}

export function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M3 4h2l2.5 11h10.8L21 8H7.2" />
    </svg>
  );
}

export function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#ff8a3d]" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.6 13.4L12 22l-9-9V4h9z" />
      <circle cx="7.5" cy="8.5" r="1" />
    </svg>
  );
}

export function MoneyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2aa251]" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9c0-1.1 1.3-2 3-2s3 .9 3 2s-1.3 2-3 2s-3 .9-3 2s1.3 2 3 2s3-.9 3-2" />
      <path d="M12 6v12" />
    </svg>
  );
}

export function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
