const activities = [];
const usageLimitInMin = 120;
function addActivity(date, activity, duration) {
    activities.push({ date, activity, duration });
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 45);
addActivity("23/7-18", "Facebook", 55);
console.log(activities);

function showStatus(activities) {
    let totalActivities = 0;
    let totalTime = 0;

    for (let i = 0; i < activities.length; i++) {
        totalActivities += 1;
        totalTime += activities[i].duration;
    }

    if (activities.length == 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }
    if (totalTime >= usageLimitInMin) {
        console.log(
            "You have reached your limit, no more smartphoning for you!"
        );
    }

    console.log(
        "You have added " +
            totalActivities +
            " activities. They amount to " +
            totalTime +
            " min. of usage"
    );
}

showStatus(activities);
