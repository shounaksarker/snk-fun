"use client";

import { useState } from "react";

export default function Page() {
  const [ieltsBook, setIeltsBook] = useState("");
  const [testNumber, setTestNumber] = useState("");
  const [audioPart, setAudioPart] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [error, setError] = useState("");
  const [showPlayer, setShowPlayer] = useState(false);

  const getAudioUrl = async (book, testNo, partNo) => {
    let baseYear;
    let extension = "mp3";
    let cam = "cam";
    let test = "test";
    let part = "part";

    switch (Number(book)) {
      case 15:
        baseYear = "2021/07";
        extension = "m4a";
        cam = "Cam";
        test = "Test";
        part = "Part";
        break;
      case 16:
        baseYear = "2021/07";
        extension = "mp3";
        cam = "Cam";
        test = "Test";
        part = "Part";
        break;
      case 17:
        baseYear = "2022/06";
        extension = "mp3";
        break;
      case 18:
        baseYear = "2023/06";
        extension = "mp3";
        break;
      case 19:
        baseYear = "2024/07";
        extension = "m4a";
        break;
      default:
        return null;
    }
    // url_type = https://ieltstrainingonline.com/wp-content/uploads/2024/07/cam19-test1-part3.m4a?_=1
    const audioUrl = `https://ieltstrainingonline.com/wp-content/uploads/${baseYear}/${cam}${book}-${test}${testNo}-${part}${partNo}.${extension}?_=${partNo}`;
    return audioUrl;
  };

  const handleGetAudio = async () => {
    if (!ieltsBook || !testNumber || !audioPart) {
      setError("Please select all options");
      setShowPlayer(false);
      return;
    }
    // Reset the audio URL to stop the current audio
    setAudioUrl("");
    setShowPlayer(false);

    const url = await getAudioUrl(ieltsBook, testNumber, audioPart);
    setAudioUrl(url);
    setShowPlayer(true);
    setError(false);
  };

  const handleReset = () => {
    setIeltsBook("");
    setTestNumber("");
    setAudioPart("");
    setAudioUrl("");
    setError("");
    setShowPlayer(false);
  };

  // Generate options for select inputs
  const bookOptions = Array.from({ length: 5 }, (_, i) => i + 15);
  const testOptions = Array.from({ length: 4 }, (_, i) => i + 1);
  const audioOptions = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center text-indigo-700">
        <h3 className="underline underline-offset-2 font-bold mb-1">
          IELTS - Listening Audio
        </h3>
        <span className="text-sm font-medium">
          (
          {`General Training: ${bookOptions[0]} - ${
            bookOptions[bookOptions?.length - 1]
          }`}
          )
        </span>
      </div>

      <div className="p-8 w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-6 text-center">
          IELTS Audio Player
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cambridge Book
            </label>
            <select
              value={ieltsBook}
              onChange={(e) => setIeltsBook(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Book</option>
              {bookOptions.map((book) => (
                <option key={book} value={book}>
                  IELTS {book}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Test Number
            </label>
            <select
              value={testNumber}
              onChange={(e) => setTestNumber(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Test</option>
              {testOptions.map((test) => (
                <option key={test} value={test}>
                  Test {test}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Audio Part
            </label>
            <select
              value={audioPart}
              onChange={(e) => setAudioPart(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Audio Part</option>
              {audioOptions.map((part) => (
                <option key={part} value={part}>
                  Audio Part {part}
                </option>
              ))}
            </select>
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <div className="flex space-x-4 pt-4">
            <button
              onClick={handleGetAudio}
              className="flex-1 bg-indigo-600 py-2 px-4 border border-indigo-800 rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Audio
            </button>
            <button
              onClick={handleReset}
              className="flex-1 bg-red-100 py-2 px-4 border border-red-200 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-red-200 focus:outline-none"
            >
              Reset
            </button>
          </div>
        </div>

        {showPlayer && audioUrl && (
          <div className="mt-6">
            <div className="text-sm text-gray-500 mb-2">
              Playing: IELTS {ieltsBook} - Test {testNumber} - Audio Part{" "}
              {audioPart}
            </div>
            <audio
              controls
              autoPlay
              className="w-full h-10 rounded-md border border-gray-300"
            >
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
}
