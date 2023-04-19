// 플래닝 포커 테스트
var planningPoker = function (estimateList) {
    console.log('플래닝 포커 시작');
    var highestScoreEstimate = null;
    var lowestScoreEstimate = null;
    for (var _i = 0, estimateList_1 = estimateList; _i < estimateList_1.length; _i++) {
        var estimate = estimateList_1[_i];
        if (highestScoreEstimate == null || highestScoreEstimate.point > estimate.point) {
            highestScoreEstimate = estimate;
        }
        else if (lowestScoreEstimate == null || lowestScoreEstimate.point < estimate.point) {
            lowestScoreEstimate = estimate;
        }
    }
    return [highestScoreEstimate, lowestScoreEstimate];
};
var testList = [
    { name: 'aron', point: 3 },
    { name: 'dong', point: 10 },
    { name: 'min', point: 5 },
];
console.log('[planningPoker(testList)] result >>> ', planningPoker(testList));
