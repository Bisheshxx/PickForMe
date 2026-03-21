const nzDateFormatter = new Intl.DateTimeFormat("en-NZ", {
  timeZone: "Pacific/Auckland",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function isInvalidDate(date: Date) {
  return Number.isNaN(date.getTime());
}

export function formatRelativeOrNZDate(dateString: string): string {
  const date = new Date(dateString);
  if (!dateString || isInvalidDate(date)) return "-";

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 10) return "just now";
  if (diffSec < 60) return `${diffSec} seconds ago`;
  if (diffMin < 60) return `${diffMin} minutes ago`;
  if (diffHour < 24) return `${diffHour} hours ago`;
  if (diffDay < 7) return `${diffDay} days ago`;

  return nzDateFormatter.format(date);
}

export function getDateRelativeNZ(dateString: string): string {
  const date = new Date(dateString);
  if (!dateString || isInvalidDate(date)) return "n/a";

  return nzDateFormatter.format(date);
}
