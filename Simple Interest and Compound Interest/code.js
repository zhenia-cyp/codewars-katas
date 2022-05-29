function interest(P,r,n) {
    // Simple interest
    const result = []
    const firststep = r*n
    const secondstep = firststep+1
    const thirdstep = secondstep*P
    console.log('Simple Interest: ',Math.round(thirdstep))
    result.push(Math.round(thirdstep))
    // Compound interest 
    const res = compoundInterest(P,r,n)
    result.push(res)
    return result
  }

  function compoundInterest(P,r,n){
      const firststep= 1+r
      const secondstep = firststep**n
      const thirdstep = secondstep*P
      console.log('compound interest::: ',Math.round(thirdstep))
      return Math.round(thirdstep)
  }

  a = interest(100, 0.1, 1)
  console.log('result: ',a)






