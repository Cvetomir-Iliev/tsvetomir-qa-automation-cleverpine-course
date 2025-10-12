let ExecutionTimes = [1250, 890, 2100, 456];

let formattedTimes = ExecutionTimes.map(function(time) {
    return time + "ms";
})
console.log("Formatted execution times:", formattedTimes);

let userIds = [101, 102, 103, 104];

let testEmails = userIds.map(function(id) {
    return id;
})