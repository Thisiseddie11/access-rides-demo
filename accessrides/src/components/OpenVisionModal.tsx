import { useEffect, useRef, useState } from 'react';
import { X, RotateCcw } from 'lucide-react';
import { startOpenVision } from '../lib/openvision';

interface OpenVisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
  stream: MediaStream | null;
}

export default function OpenVisionModal({ isOpen, onClose, onRetry, stream }: OpenVisionModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInitializing, setIsInitializing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && stream && videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      
      // Start OpenVision processing
      setIsInitializing(true);
      setError(null);
      
      startOpenVision(stream)
        .then(() => {
          setIsInitializing(false);
        })
        .catch((err) => {
          console.error('OpenVision initialization failed:', err);
          setError('Failed to initialize OpenVision. Please try again.');
          setIsInitializing(false);
        });
    }
  }, [isOpen, stream]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-[90vw] max-w-md bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤟</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
          >
            <X size={16} className="text-white" />
          </button>
        </div>

        {/* Video Preview */}
        <div className="relative bg-black">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-64 object-cover"
          />
          
          {/* Status Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            {isInitializing && (
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-white text-sm">Initializing OpenVision...</p>
              </div>
            )}
            
            {error && (
              <div className="text-center p-4">
                <p className="text-red-400 text-sm mb-4">{error}</p>
                <button
                  onClick={onRetry}
                  className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <RotateCcw size={16} />
                  Retry
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-xs mb-2">
              Sign language recognition is active
            </p>
            <div className="flex items-center justify-center gap-2 text-green-400 text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Ready to translate signs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
