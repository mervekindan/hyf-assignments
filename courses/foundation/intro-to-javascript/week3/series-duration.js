//Series duration of my life
const seriesDurations = [
    {
        title: "Fringe",
        days: 3,
        hours: 4,
        minutes: 40,
    },
    {
        title: "Brooklyn Nine-Nine",
        days: 2,
        hours: 5,
        minutes: 12,
    },
    {
        title: "Friends",
        days: 3,
        hours: 11,
        minutes: 36,
    },
];

function watchDurationInMin(series) {
    return series.days * 24 * 60 + series.hours * 60 + series.minutes;
}

function getLifePercentageInMin(minutes, totalLifeInYears) {
    const totalLifeInMin = totalLifeInYears * 365 * 24 * 60;
    const percentage = 100 * (minutes / totalLifeInMin);
    return percentage;
}

function logOutSeriesText() {
    let totalSeriesInMin = 0;

    for (i = 0; i < seriesDurations.length; i++) {
        const currentSeriesInMin = watchDurationInMin(seriesDurations[i]);
        const currentPercentage = getLifePercentageInMin(
            currentSeriesInMin,
            80
        );
        console.log(
            seriesDurations[i].title +
                " took " +
                currentPercentage.toFixed(3) +
                "% of my life"
        );
        totalSeriesInMin += currentSeriesInMin;
    }

    const totalPercentage = getLifePercentageInMin(totalSeriesInMin, 80);
    console.log(
        "In total that is " + totalPercentage.toFixed(3) + "% of my life"
    );
}

logOutSeriesText(); // logs out the text found above
