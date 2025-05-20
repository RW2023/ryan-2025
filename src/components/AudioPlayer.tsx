// src/components/AudioPlayer.tsx
import React from 'react';

interface AudioPlayerProps {
    src: string;
    title?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
            {title && (
                <div className="text-xl font-bold text-center mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
                    {title}
                </div>
            )}
            <div className="flex justify-center">
                <audio
                    controls
                    className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
                >
                    <source src={src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};

export default AudioPlayer;
