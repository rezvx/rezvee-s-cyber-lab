// ─── STREAM CONFIG ───────────────────────────────────────────────
// Toggle isLive + paste video ID when going live, then git push

export const streamConfig = {
  isLive: true, // change to true when going live
  youtubeVideoId: "", // change here when going live, e.g. "dQw4w9WgXcQ"
  streamTitle: "FIFA WC 2026",
  streamDescription: "Cybersecurity • Tech • Sports",
};

// ─── UPCOMING SCHEDULE ───────────────────────────────────────────
// Add/remove sessions freely — shows on the Live page
export const upcomingSchedule = [
  {
    id: "s1",
    title: "Germany VS Curaçao",
  description: "FIFA World Cup 2026 Group Stage Match",
    date: "2026-06-26",
    time: "23:00",
    timezone: "BST+6",
    tag: "Football",
  },
];
