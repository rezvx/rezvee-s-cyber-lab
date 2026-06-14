import Hls from 'hls.js';
import { useEffect, useRef, useState } from 'react';

export default function StreamPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true); // start muted for autoplay
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl = 'http://stream.rezv.me/live/rezvx/index.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl;
      video.play().catch(() => {});
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    setMuted(false);
    setStarted(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video
        ref={videoRef}
        controls
        autoPlay
        muted={muted}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Unmute overlay — shown until user clicks */}
      {!started && (
        <div
          onClick={handleUnmute}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(74,222,128,0.4)',
            borderRadius: '8px',
            padding: '10px 20px',
            color: '#4ade80',
            fontFamily: 'monospace',
            fontSize: '13px',
            backdropFilter: 'blur(4px)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
            Click to enable sound
          </div>
        </div>
      )}
    </div>
  );
}