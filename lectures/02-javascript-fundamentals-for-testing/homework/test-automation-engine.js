// ============================================================================
// This file integrates ALL previous components from Task 1 (data generators),
// Task 2 (validators), and Task 3 (decision engine). It copies the *key
// functions* into a single, self-contained module and exposes orchestrators:
//  - executeTestScenario (single scenario)
//  - runTestAutomationDemo (multi-scenario demo + metrics)
// ----------------------------------------------------------------------------
// What’s integrated here:
//  - Task 1: generateTestUserName, buildTestURL
//  - Task 2: validateCompleteAPIResponse
//  - Task 3: handleTestEnvironment, determineTestAction
//
// At the bottom of the file, runTestAutomationDemo() is invoked to demonstrate
// the full automation flow across multiple scenarios with logs and metrics.
// ============================================================================

"use strict";

/* ===========================
 * Task 1 — Data Generators
 * ===========================
 */

function generateTestUserName(basePrefix = "TestUser") {
  const timestamp = Date.now();
  const userName = `${basePrefix}_${timestamp}`;
  return userName;
}

function buildTestURL(environment, endpoint, userId) {
  const url = `https://${environment}.testsite.com/${endpoint}?user=${encodeURIComponent(userId)}`;
  return url;
}

/* ===========================
 * Task 2 — Validators
 * ===========================
 *
 * Check that sample API response meets the full set of conditions.
 */
function validateCompleteAPIResponse(sample) {
  const { statusCode, responseTime, hasData, errorCount } = sample || {};

  return (
    statusCode === 200 &&
    typeof responseTime === "number" &&
    responseTime < 1000 &&
    !!hasData &&
    errorCount === 0
  );
}

/* ===========================
 * Task 3 — Decision Engine
 * ===========================
 */

function determineTestAction(testResult, retryCount) {
  if (testResult === "pass") {
    return "complete";
  } else if (testResult === "fail" && retryCount < 3) {
    return "retry";
  } else if (testResult === "fail" && retryCount >= 3) {
    return "abort";
  } else {
    return "investigate";
  }
}

function handleTestEnvironment(environment) {
  let config;
  switch (environment) {
    case "development":
      config = { timeout: 5000, debug: true };
      break;
    case "staging":
      config = { timeout: 15000, debug: true };
      break;
    case "production":
      config = { timeout: 30000, debug: false };
      break;
    default:
      config = { timeout: 10000, debug: false };
  }
  return config;
}

/* ===========================
 * Small Arithmetic Helpers
 * ===========================
 * Used to calculate demo metrics.
 */
function add(a, b) {
  return Number(a) + Number(b);
}
function average(nums) {
  if (!nums.length) return 0;
  const total = nums.reduce((acc, n) => acc + Number(n || 0), 0);
  return total / nums.length;
}
function pct(numerator, denominator) {
  if (!denominator) return 0;
  return (Number(numerator) / Number(denominator)) * 100;
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

/* =====================================
 * Orchestrator — executeTestScenario()
 * =====================================
 *
 * Parameters:
 *  - scenarioName: string
 *  - environment: 'development' | 'staging' | 'production' | string
 *  - userRole: string
 *  - expectedResults: {
 *        statusCode?: number,
 *        responseTime?: number,
 *        hasData?: boolean,
 *        errorCount?: number,
 *        retryCount?: number
 *    }
 */
function executeTestScenario(
  scenarioName,
  environment,
  userRole,
  expectedResults = {}
) {
  // 1) Build a test user
  const rolePrefix = (userRole ? String(userRole) : "TestUser")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
  const testUserId = generateTestUserName(rolePrefix);

  // 2) Build a test URL/endpoint from the scenario name
  const endpoint = String(scenarioName || "default")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
  const testURL = buildTestURL(environment, endpoint, testUserId);

  // 3) Prepare sample data for validation (Task 2 logic)
  const sample = {
    statusCode: expectedResults.statusCode ?? 200,
    responseTime: expectedResults.responseTime ?? 500, // ms
    hasData: expectedResults.hasData ?? true,
    errorCount: expectedResults.errorCount ?? 0,
  };
  const validationPassed = validateCompleteAPIResponse(sample);

  // 4) Get environment configuration (Task 3)
  const environmentConfig = handleTestEnvironment(environment);

  // 5) Determine the action (Task 3). Treat validation as pass/fail.
  const retryCount = Number.isInteger(expectedResults.retryCount)
    ? expectedResults.retryCount
    : 0;
  const testResult = validationPassed ? "pass" : "fail";
  const actionDecision = determineTestAction(testResult, retryCount);

  // 6) Return comprehensive object
  return {
    scenarioName,
    inputs: {
      environment,
      userRole,
      expectedResults,
    },
    generated: {
      testUserId,
      endpoint,
      testURL,
    },
    validation: {
      sample,
      validationPassed,
    },
    environmentConfig,
    decision: {
      testResult,
      retryCount,
      actionDecision,
    },
    meta: {
      executedAt: new Date().toISOString(),
      notes: "Integrated flow using Tasks 1–3.",
    },
  };
}

/* ==================================================
 * Demo Runner — runTestAutomationDemo()
 * ==================================================
 * - Demonstrates complete workflow across multiple scenarios
 * - Processes different envs, roles, response times & codes
 * - Shows string ops, arithmetic, validations, decisions
 * - Logs each step with clear headers
 * - Calculates final metrics using arithmetic helpers
 */
function runTestAutomationDemo() {
  const banner = (title) => {
    const line = "=".repeat(title.length + 8);
    console.log(`\n${line}\n=== ${title} ===\n${line}`);
  };

  banner("BEGIN TEST AUTOMATION DEMO");

  // Sample scenarios to exercise all functions
  const scenarios = [
    {
      scenarioName: "login",
      environment: "development",
      userRole: "admin",
      expectedResults: {
        statusCode: 200,
        responseTime: 420,
        hasData: true,
        errorCount: 0,
        retryCount: 0,
      },
    },
    {
      scenarioName: "api",
      environment: "staging",
      userRole: "tester",
      expectedResults: {
        statusCode: 500,
        responseTime: 180,
        hasData: false,
        errorCount: 2,
        retryCount: 1,
      },
    },
    {
      scenarioName: "performance",
      environment: "production",
      userRole: "guest",
      expectedResults: {
        statusCode: 200,
        responseTime: 1120,
        hasData: true,
        errorCount: 0,
        retryCount: 3,
      },
    },
    {
      scenarioName: "api data fetch",
      environment: "staging",
      userRole: "admin power",
      expectedResults: {
        statusCode: 200,
        responseTime: 980,
        hasData: true,
        errorCount: 0,
        retryCount: 0,
      },
    },
  ];

  const results = [];
  const responseTimes = [];
  let passCount = 0;
  let failCount = 0;

  scenarios.forEach((s, idx) => {
    const header = `Scenario ${idx + 1}: ${s.scenarioName.toUpperCase()} — ${s.environment} — role: ${s.userRole}`;
    banner(header);

    // Show some lightweight string manipulation
    const prettyRole = s.userRole
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    console.log(`[String] Pretty role: ${prettyRole}`);

    // Execute the integrated workflow
    const result = executeTestScenario(
      s.scenarioName,
      s.environment,
      s.userRole,
      s.expectedResults
    );
    results.push(result);
    responseTimes.push(result.validation.sample.responseTime);

    // Arithmetic example: add a synthetic 50ms overhead and clamp to env timeout
    const envCfg = result.environmentConfig;
    const adjusted = clamp(
      add(result.validation.sample.responseTime, 50),
      0,
      envCfg.timeout
    );
    console.log(
      `[Arithmetic] Raw RT: ${result.validation.sample.responseTime}ms | +50ms overhead => ${adjusted}ms (clamped to env timeout ${envCfg.timeout}ms)`
    );

    // Validation & decision logs
    console.log(`[Validation] Passed: ${result.validation.validationPassed}`);
    console.log(
      `[Decision] Result: ${result.decision.testResult} | Action: ${result.decision.actionDecision} | Retries: ${result.decision.retryCount}`
    );
    console.log(`[URL] ${result.generated.testURL}`);
    console.log(`[User] ${result.generated.testUserId}`);

    if (result.validation.validationPassed) passCount++;
    else failCount++;
  });

  // Metrics
  banner("FINAL METRICS");
  const total = results.length;
  const avgRt = Math.round(average(responseTimes));
  const successRate = pct(passCount, total).toFixed(1);

  console.log(`Total scenarios: ${total}`);
  console.log(`Passed: ${passCount} | Failed: ${failCount}`);
  console.log(`Average response time: ${avgRt}ms`);
  console.log(`Success rate: ${successRate}%`);

  banner("END TEST AUTOMATION DEMO");

  return { total, passCount, failCount, avgRt, successRate, results };
}

// Call the demo
const __demoSummary__ = runTestAutomationDemo();

console.log("[Demo Summary]", JSON.stringify(__demoSummary__, null, 2));
