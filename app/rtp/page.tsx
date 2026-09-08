export default function RtpPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/rtp-files/index.html"
        className="w-full h-full border-none min-h-screen"
        title="RTP Slot"
      />
    </div>
  );
}