import aida from 'aida-sdk'; // Use the new package name you published!

// 1. Initialize the SDK
aida.init({
  apiKey: "YOUR_GENERATED_API_KEY_HERE",
  projectId: "your-github-username/your-repo-name", 
  baseUrl: "https://nondictatorially-spouseless-cornelius.ngrok-free.dev",
  environment: "staging",
  service: "my-test-script"
});

// 2. Simulate a fatal application error
console.log("Starting application..

console.warn("Memory usage is high..")

// Throwing this unhandled error will be automatically intercepted by the SDK!
throw new Error("CRITICAL: Database connection lost during transaction!");
