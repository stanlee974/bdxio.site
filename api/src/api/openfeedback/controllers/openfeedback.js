"use strict";
const { getSessions, getSpeakers } = require("../../../helpers");

module.exports = {
  async getOpenfeedbackFormattedData(ctx, next) {
    try {
      const [sessions, speakers] = await Promise.all([
        getSessions(),
        getSpeakers(),
      ]);
      ctx.status = 200;
      ctx.body = { sessions, speakers };
    } catch (e) {
      ctx.status = 500;
      console.error(e);
      ctx.body = e;
    } finally {
      next();
    }
  },
};

// {
//   "sessions": {
//       "2": {
//           "speakers": [
//               "lhwORZ2dSGbF1OG6VkfbjkOCzR12"
//           ],
//           "tags": [
//               "Architecture & Paradigme"
//           ],
//           "title": "Entre industrialisation et artisanat, le métier de développeur",
//           "id": "2",
//           "startTime": "2019-06-27T16:20:00+02:00",
//           "endTime": "2019-06-27T17:10:00+02:00",
//           "trackTitle": "Amphi D"
//       },
//       "30": {
//           "...": "",
//           "hideInFeedback": true
//       }
//   },
//   "speakers": {
//       "lhwORZ2dSGbF1OG6VkfbjkOCzR12": {
//           "name": "Olivier PONCET",
//           "photoUrl": "https://avatars2.githubusercontent.com/u/29702924?v=4",
//           "socials": [
//               {
//                   "name": "twitter",
//                   "link": "https://twitter.com/ponceto91"
//               }
//           ],
//           "id": "lhwORZ2dSGbF1OG6VkfbjkOCzR12"
//       },
//       "anotherId": {
//           "...": ""
//       }
//   }
// }
