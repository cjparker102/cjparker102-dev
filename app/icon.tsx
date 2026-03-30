import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 700,
        }}
      >
        <span style={{ color: '#E8A83E', marginRight: -2 }}>{'{'}</span>
        <span style={{ color: '#FFFFFF', fontSize: 20 }}>C</span>
        <span style={{ color: '#E8A83E', marginLeft: -2 }}>{'}'}</span>
      </div>
    ),
    {
      ...size,
    }
  )
}
