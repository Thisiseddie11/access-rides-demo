import { useState } from 'react';
import { Mic } from 'lucide-react';
import OpenVisionModal from './OpenVisionModal';

export default function DeafButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDeafClick = async () => {
    try {
      setError(null);
      
      // Request camera access
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        } 
      });
      
      setStream(mediaStream);
      setIsModalOpen(true);
    } catch (err) {
      console.error('Camera access denied:', err);
      setError('Camera access is required for sign language recognition. Please allow camera access and try again.');
    }
  };

  const handleClose = () => {
    // Stop all tracks to release camera
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsModalOpen(false);
    setError(null);
  };

  const handleRetry = () => {
    handleClose();
    // Small delay before retrying
    setTimeout(() => {
      handleDeafClick();
    }, 100);
  };

  return (
    <>
      <button
        onClick={handleDeafClick}
        className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm border bg-white hover:bg-gray-50 text-gray-900 transition-colors"
        aria-label="OpenVision (Deaf mode)"
        title="Deaf mode — OpenVision"
      >
        <span className="text-lg">🤟</span>
      </button>

      <OpenVisionModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onRetry={handleRetry}
        stream={stream}
      />

      {/* Error Toast */}
      {error && !isModalOpen && (
        <div className="fixed top-4 left-4 right-4 z-50 bg-red-500 text-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm">{error}</p>
            <button
              onClick={() => setError(null)}
              className="text-white hover:text-gray-200 ml-2"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
