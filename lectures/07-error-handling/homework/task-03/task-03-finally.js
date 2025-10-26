// 1. Implement connection state
let connected = false;

function connect() {
    if (connected) {
        console.log("Already connected");
    } else {
        connected = true;
        console.log("Connected");
    }
}

function disconnect() {
    if (connected) {
        connected = false;
        console.log("Disconnected");
    } else {
        console.log("Already disconnected");
    }
}

// 2. Implement operation runner
function runOperation(config) {
    if (!connected) {
        throw new Error("Not connected");
    }
    if (config.shouldFail) {
        throw new Error("Operation failed: " + config.name);
    }
    return { ok: true, name: config.name };
}

// 3. Implement run with cleanup
function runWithCleanup(config) {
    connect();
    try {
        return runOperation(config);
    } catch (error) {
        console.log("Operation failed:", error.message);
        return { ok: false };
    } finally {
        disconnect();
    }
}

// 4. Demonstrate the functions
console.log("=== Running with cleanup ===");
console.log(runWithCleanup({ shouldFail: false, name: "test1" }));
console.log(runWithCleanup({ shouldFail: true, name: "test2" }));
