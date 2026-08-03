import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: '#0a0a0b',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '25%',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 600,
          letterSpacing: '-0.05em',
        }}
      >
        K<span style={{ color: '#3B82F6' }}>N</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
