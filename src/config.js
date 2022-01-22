const development = {
  // API_URL: "http://fyxed-dashboard-api-staging.us-east-2.elasticbeanstalk.com",
  API_URL: "https://dashboard-api-staging.fyxed.com",
  // API_URL: "https://dashboard-api.fyxed.com",
  // APP_URL: "http://localhost:3000",
  APP_URL: "https://staging.fyxed.com",

}

const production = {
  // API_URL: "http://fyxed-dashboard-api-dev.us-east-2.elasticbeanstalk.com",
  // API_URL: "https://dashboard-api.fyxed.com",
  API_URL: "https://dashboard-api-staging.fyxed.com",
  // APP_URL: "https://app.fyxed.com",
  APP_URL: "https://staging.fyxed.com",

}



const config = {
  // Add common config values here

  // Default to dev if not set
  ...(process.env.NODE_ENV === "production" ? production : development),
};

export default config;