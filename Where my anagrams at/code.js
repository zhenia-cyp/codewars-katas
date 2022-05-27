function anagrams(word, words) {
    let patern = word.split('').sort().join('')
      console.log('patern:',patern)
      const result = words.filter(item=>{
          let sorted = item.split('').sort().join('')
          return sorted===patern;
      });
  
      return result 
  }
  const res = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
  console.log('res: ',res)










