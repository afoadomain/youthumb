import React, { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8" style={{ width: '62%' }}>
      <h1 className="text-3xl font-bold mb-2">
          Free Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600" style={{ width: '100%' }}>
          Elevate your YouTube channel to new heights with our effortless solution for accessing high-quality thumbnails in a range of resolutions. Our user-friendly application not only simplifies the process of thumbnail downloads but also offers you the opportunity to draw inspiration from the creative works of fellow content creators. It's the perfect tool to enhance and invigorate your own video content.
          <br />
          <br />
          With just a simple action, you can transform the visual appeal of your YouTube videos. Paste the video URL into our intuitive interface, and with a quick click on the 'Download' button, you'll have high-quality thumbnails ready to captivate your audience.
          <br />
          <br />
          Say goodbye to the hassle of searching for the right thumbnail – our application provides a seamless experience, ensuring your content stands out in style.
          <br />
          <br />
          Take the first step towards making your YouTube channel more engaging and memorable today.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-4" style={{ width: '100%' }}>
            Downloaded thumbnails can be used to enhance your YouTube channel's visual appeal. Elevate your content and make it more engaging with high-quality thumbnails. Say goodbye to the hassle of searching for the right thumbnail – our application provides a seamless experience, ensuring your content stands out in style.
            <br />
            <br />
            Start making your YouTube channel more engaging and memorable today!
          </p>
        </div>
      )}
      <p className="text-gray-600 mt-4" style={{ width: '62%' }}>
        <strong>YouTube Thumbnail Downloader - Save YT Video Thumbnails</strong>
        <br />
        Get high-quality free thumbnail images from any YouTube video in various resolutions, including Full HD (1080p), HD (720p), and SD. Our YouTube Thumbnail Grabber supports multiple video formats, including HD, HQ, 1080p, and 4K videos.
        <br />
        <br />
        <strong>Why Use Our YouTube Thumbnail Grabber Website?</strong>
        <br />
        Our YouTube Thumbnail Downloader is a valuable tool for extracting thumbnails from any YouTube video. These thumbnails can be used in presentations, animation projects, and various other creative activities.
        <br />
        <br />
        <strong>How to Use Our YouTube Thumbnail Downloader?</strong>
        <br />
        1. Copy the URL of the YouTube video whose thumbnail you want to download.
        <br />
        2. Paste the URL into the input box on our website.
        <br />
        3. Our tool will instantly generate thumbnails in different sizes.
        <br />
        4. Click the download button to save the thumbnail to your device.
        <br />
        <br />
        <strong>Please note:</strong> While downloading YouTube thumbnails is legal, both thumbnails and videos are copyrighted materials. Be sure to obtain proper permissions from the content creator before reusing them.
        <br />
        <br />
        <strong>Compatibility of Our YT Thumbnail Grabber Website</strong>
        <br />
        Our YouTube Thumbnail Downloader is compatible with most devices, including Android phones and desktop systems. However, it may not work on iPhones due to restrictions on image downloads. Jailbroken iPhones may not encounter this issue.
        <br />
        <br />
        <strong>Is There a Copyright Risk with YouTube Thumbnails?</strong>
        <br />
        Downloading YouTube thumbnails may involve copyright considerations. Always respect the copyrights of video owners and seek permission if you plan to use the thumbnails, especially within the YouTube platform.
        <br />
        <br />
        <strong>Are Reused YouTube Thumbnails SEO Friendly?</strong>
        <br />
        Reusing YouTube thumbnails is generally not considered SEO friendly because Google indexes most YouTube thumbnails. To enhance SEO friendliness, consider adding unique effects using software like Photoshop to make your thumbnail stand out and appear unique to search engines.
        <br />
        <br />
        <strong>Download YouTube video thumbnails hassle-free with our YouTube Thumbnail Downloader.</strong>
      </p>
    </div>
  );
};

export default Index;
