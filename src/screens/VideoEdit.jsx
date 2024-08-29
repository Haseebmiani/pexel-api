// import React from "react";

// const VideoEdit = ({ video }) => {
//   return (
//     <div>
//       {video && video.video_files && video.video_files.length > 0 ? (
//         <div className="w-1/2 h-screen  mx-auto mt-10 border-spacing-8 ">
//           <video
//             ref={video.video_files[0]}
//             controls
//             width={video.video_files[0].width}
//             height={video.video_files[0].height}
//             autoPlay
//             preload="auto">
//             <source
//               src={video.video_files[0].link}
//               type={video.video_files[0].file_type}
//             />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       ) : (
//         <p>Data not found!</p>
//       )}
//     </div>
//   );
// };

// export default VideoEdit;
