// ─────────────────────────────────────────────
//  PERSONALIZATION — edit these values for each user
// ─────────────────────────────────────────────

export const userConfig = {
  // The user ID that gets stored in the spreadsheet
  userId: "karen",

  // Display name shown in the app header
  displayName: "karen",

  // Timezone for all date/time calculations
  timezone: "America/Edmonton",

  // Your Google Sheet URL (the "Open Sheet" link in the app)
  sheetUrl:
    "https://docs.google.com/spreadsheets/d/1t1oBxGL76Ff1vygRPW9k-PoBQN7j0R9waCm34DvQSrc/edit?gid=0#gid=0",

  // Your Google Apps Script web app URL
  apiUrl:
    "https://script.google.com/macros/s/AKfycby-Er_7z4Imklj_lDeoU-mA_eYlaTit8AeAxe9kpQAiRCIXc0k4XpOt2clzX7wkarpOEw/exec",

  // Background image:
  //   - Use a filename from the /public folder, e.g. "bg-ski.jpg"
  //   - Or use a full URL, e.g. "https://example.com/my-photo.jpg"
  backgroundImage: "bg-ski.jpg",

  // How many recent activities to fetch and display
  recentActivityLimit: 10,
};
