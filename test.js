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

console.log("Memory usage is high..")

console.log("CPU usage is high")

const userConfig = { theme: "dark", notifications: true };

function getUserTheme() {
    return userConfig.theme;
}

const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE";

function executeDynamicMath(mathExpression) {
    const result = eval(mathExpression);
    return result;
}

// Throwing this unhandled error will be automatically intercepted by the SDK!
throw new Error("CRITICAL: Database connection lost during transaction!");
