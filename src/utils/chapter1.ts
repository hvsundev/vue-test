interface Estimate {
  name: string,
  point: number
}

// 플래닝 포커 테스트
const planningPoker = (estimateList: Array<Estimate>) => {
  console.log('플래닝 포커 시작');
  let highestScoreEstimate: Estimate = null
  let lowestScoreEstimate: Estimate = null

  for (const estimate of estimateList) {
    if (highestScoreEstimate == null || highestScoreEstimate.point > estimate.point) {
      highestScoreEstimate = estimate
    } else if (lowestScoreEstimate == null || lowestScoreEstimate.point < estimate.point) {
      lowestScoreEstimate = estimate
    }
  }

  return [highestScoreEstimate, lowestScoreEstimate]
}

const testList = [
  { name: 'aron', point: 3 },
  { name: 'dong', point: 10 },
  { name: 'min', point: 5 },
]

console.log('[planningPoker(testList)] result >>> ', planningPoker(testList))
